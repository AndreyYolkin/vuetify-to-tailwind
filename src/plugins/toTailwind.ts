import { builders, type CodemodPlugin } from 'vue-metamorph'
import { classMap } from '../constants/mappings'

function replaceClassString (classString: string): string {
  return classString
    .split(/\s+/)
    .map(cls => classMap[cls] || cls)
    .join(' ')
}

export const replaceClassNamesCodemod: CodemodPlugin = {
  type: 'codemod',
  name: 'simple replace class names',

  transform ({ scriptASTs, sfcAST, utils: { traverseScriptAST, traverseTemplateAST } }) {
    let transformCount = 0

    for (const scriptAST of scriptASTs) {
      traverseScriptAST(scriptAST, {
        visitJSXAttribute (path) {
          const attr = path.node
          if (attr.name.name === 'class' || attr.name.name === 'className') {
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
            if (node.type === 'VAttribute' && node.key.name === 'class' && node.value && node.value.type === 'VLiteral') {
              const original = node.value.value.replace(/^"|"$/g, '')
              const newValue = replaceClassString(original)

              if (newValue !== original) {
                node.value.value = `"${newValue}"`
                transformCount++
              }
            }

            if (node.type === 'VExpressionContainer' && node.parent?.type === 'VAttribute' && node.parent.directive) {
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
