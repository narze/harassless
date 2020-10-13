import { checker } from '../../utils/checker'

describe('checker', () => {
  it('should return [] when input is []', () => {
    expect(checker([], ``)).toEqual([])
  })
})
