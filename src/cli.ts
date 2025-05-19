import process from 'node:process'
import { createVueMetamorphCli } from 'vue-metamorph'

import { replaceClassNamesCodemod } from './plugins/toTailwind'

const cli = createVueMetamorphCli({
  plugins: [
    replaceClassNamesCodemod,
  ],
  additionalCliOptions: program =>
    program
      .option('-a, --attributes <VALUE>', 'Attributes to transform', 'class,className'),
})

process.on('SIGQUIT', cli.abort)
process.on('SIGTERM', cli.abort)
process.on('SIGINT', cli.abort)

cli.run()
