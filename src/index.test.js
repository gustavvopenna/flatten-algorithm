const { flatten } = require('./index.js')

describe('flatten function', () => {
  it('should handle an empty array', () => {
    const input = []
    const output = []

    expect(flatten(input)).toStrictEqual(output)
  })
  
  it('should handle an array with one element', () => {
    const input = [1]
    const output = [1]

    expect(flatten(input)).toStrictEqual(output)
  })
  
  it('should flatten a nested array', () => {
    const input = [1, [2, [3, [4, 5]]]]
    const output = [1, 2, 3, 4, 5]

    expect(flatten(input)).toStrictEqual(output)
  })
  
  it('should flatten a deeply nested array', () => {
    const input1 = [1, [2, [3, [4, 5]]], [[[1, 2, [[[3, 4, 5]]]]]]]
    const input2 = [1, [2, 3, [4, 5, 6,[7, 8, [[10, 11, [[12, 13]]]]]]]]

    const output1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    const output2 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13]

    expect(flatten(input1)).toStrictEqual(output1)
    expect(flatten(input2)).toStrictEqual(output2)
  })

  it('should throws an Error if argument is not instance of Array', () => {
    const error = new Error('Argument 2 is not an instance of Array')
    
    expect(() => flatten(2)).toThrow(error)
  })

  it('should throws an error if some element in the array is not a number', () => {
    const error = new Error('Element false is not a number')
    const error2 = new Error('Element [object Object] is not a number')
    const error3 = new Error('Element null is not a number')

    expect(() => flatten([1, 2, false])).toThrow(error)
    expect(() => flatten([1, 2, [3, {}]])).toThrow(error2)
    expect(() => flatten([1, 2, [3, null]])).toThrow(error3)
  })
})
