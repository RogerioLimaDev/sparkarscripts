import { variable } from './send.js'

const Diagnostics = require('Diagnostics')

variable.then((message) => {
  const variableReceved = message
  let vectorReceived = variableReceved
  Diagnostics.log('não deu pau até agora: ')
  const myX = vectorReceived.x.pinLastValue()
  const myY = vectorReceived.y.pinLastValue()
  const myZ = vectorReceived.z.pinLastValue()
  Diagnostics.log('Valor de X: '+myX)
  Diagnostics.log('Valor de Y: '+myY)
  Diagnostics.log('Valor de Z: '+myZ)

}).catch(() => {

  Diagnostics.log('Fudeu')

})