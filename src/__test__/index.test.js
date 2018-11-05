import enviroment from '../index'

describe('Tests work as expected', () => {
  it('should return the current config environment', () => {
    expect(enviroment()).toEqual('testing')
  })
})
