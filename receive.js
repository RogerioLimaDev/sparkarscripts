import { variable } from './send.js'

const Diagnostics = require('Diagnostics')

variable.then((message) => {
  const variableReceved = message
  let vectorReceived = variableReceved
  Diagnostics.log('não deu pau até agora: ')

  const myNumber = vectorReceived.y.pinLastValue()
  Diagnostics.log(myNumber)
}).catch(() => {

  Diagnostics.log('Fudeu')

})