import * as actions from '../actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const payload = true
    const expectedAction = {
      type: 'SHOW_EVERYTHING',
      payload
    }
    expect(actions.showEverythingOnSearch(payload)).toEqual(expectedAction)
  })
})
