const stub = (inputs, value) => {
  if (!inputs || typeof inputs !== 'string') {
    throw new TypeError()
  }
  inputs = inputs.split('.')

  let obj = {}
  let name = inputs.shift()
  let isfunction = name.includes('()')

  if (isfunction) {
    name = name.substring(0, name.length - 2)
  }

  if (!inputs.length) {
    obj[name] = isfunction
                  ? () => value
                  : value
  } else {
    obj[name] = isfunction
                  ? () => stub(inputs.join('.'), value)
                  : stub(inputs.join('.'), value)
  }

  return obj
}

module.exports = stub
