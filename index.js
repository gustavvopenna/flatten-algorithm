function flatten(arr) {
  if(!Array.isArray(arr))
    throw new Error(`Argument ${arr} is not an instance of Array`)

  let result = []

  for(const item of arr) {
    if(Array.isArray(item)) {
      result = [...result, ...flatten(item)]
    } else if(typeof item !== 'number' || Number.isNaN(item)) {
      throw new Error(`Element ${item} is not a number`)
    } else {
      result.push(item)
    }
  }

  return result
}

module.exports = {
  flatten
}
