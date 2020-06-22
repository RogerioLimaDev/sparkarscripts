
// const Scene = require('Scene')

const Patches = require('Patches')
const Diagnostics = require('Diagnostics')

export const variable = new Promise((resolve, reject) => {
  const promiseVector = Patches.outputs.getVector('myVector')
  if (promiseVector !== undefined || promiseVector !== null) {
    resolve(promiseVector)
    Diagnostics.log('Promise exported')
  } else {
    reject(Error)
  }
})
