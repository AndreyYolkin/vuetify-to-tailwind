import { defineConfig } from 'tsdown/config'

export default defineConfig({
  entry: 'src/cli.ts',
  inputOptions: {
    plugins: [
      {
        name: 'vue-metamorph',
        transform(code, id) {
          if (id.endsWith('vue-metamorph/dist/main.js')) {
            code = code.replaceAll('originalNode.range[', 'originalNode.range?.[')
            code = code.replace(`});
      if (rootNodeChanged) {`, 
      `}).filter(({node}) => node.type);
      if (rootNodeChanged) {`)
            return code
          }
        }
      }
    ]
  }
})