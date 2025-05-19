import { builders, type CodemodPlugin } from 'vue-metamorph'
import classes from '../mappings.json' with { type: 'json' }

function replaceClassString (classString: string): string {
  return classString
    .split(/\s+/)
    .map(cls => classes[cls as keyof typeof classes] || cls)
    .join(' ')
}

function toKebabCase (str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

export const replaceClassNamesCodemod: CodemodPlugin = {
  type: 'codemod',
  name: 'Migrate vuetify utility classes to tailwind',

  transform ({ opts, scriptASTs, sfcAST, utils: { traverseScriptAST, traverseTemplateAST } }) {
    let transformCount = 0

    const attributes = new Set((opts.attributes as string).split(',').map(a => toKebabCase(a.trim())))
    const wildcard = attributes.has('*')

    function checkAttribute (attr: string) {
      if (wildcard) {
        return true
      }
      return attributes.has(toKebabCase(attr))
    }

    for (const scriptAST of scriptASTs) {
      traverseScriptAST(scriptAST, {
        visitJSXAttribute (path) {
          const attr = path.node
          if (checkAttribute(attr.name.name as string)) {
            const valueNode = attr.value
            if (valueNode?.type === 'Literal' && typeof valueNode.value === 'string') {
              const newValue = replaceClassString(valueNode.value)
              if (newValue !== valueNode.value) {
                valueNode.value = newValue
                transformCount++
              }
            }
          }
          return this.traverse(path)
        },
      })
    }

    if (sfcAST) {
      traverseTemplateAST(sfcAST, {

        enterNode (node) {
          if ('type' in node) {
            if (node.type === 'VAttribute' && checkAttribute(node.key.name as string) && node.value && node.value.type === 'VLiteral') {
              const original = node.value.value.replace(/^"|"$/g, '')
              const newValue = replaceClassString(original)

              if (newValue !== original) {
                node.value.value = `"${newValue}"`
                transformCount++
              }
            }

            if (node.type === 'VExpressionContainer'
              && node.parent?.type === 'VAttribute'
              && node.parent.directive
              && node.parent.key.argument
              && 'name' in node.parent.key.argument
              && checkAttribute(node.parent.key.argument.name)
            ) {
              traverseTemplateAST(node, {
                enterNode (expr) {
                  if (expr?.type === 'Literal' && typeof expr.value === 'string') {
                    const original = expr.value
                    const newValue = replaceClassString(original)

                    if (newValue !== original) {
                      expr.value = newValue
                      transformCount++
                    }
                  } else if (expr?.type === 'TemplateLiteral') {
                    let changed = false
                    const newQuasis = expr.quasis.map(q => {
                      const next = replaceClassString(q.value.raw)
                      if (next !== q.value.raw) {
                        changed = true
                        return builders.templateElement(
                          { raw: next, cooked: null },
                          q.tail,
                        )
                      }
                      return q
                    })

                    if (changed) {
                      expr.quasis = newQuasis
                      transformCount++
                    }
                  }
                },
              })
            }
          }
        },

        leaveNode () {},
      })
    }

    return transformCount
  },
}
