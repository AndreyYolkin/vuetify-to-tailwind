import process from 'node:process'
import { createVueMetamorphCli } from 'vue-metamorph'

import { replaceClassNamesCodemod } from './plugins/toTailwind'

const cli = createVueMetamorphCli({
  plugins: [
    replaceClassNamesCodemod,
  ],
})

process.on('SIGQUIT', cli.abort)
process.on('SIGTERM', cli.abort)
process.on('SIGINT', cli.abort)

cli.run()
