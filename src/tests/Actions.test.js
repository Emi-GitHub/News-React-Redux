import * as actions from '../actions';

describe('actions', () => {
  it('should create an action to show everything', () => {
    const payload = true;
    const expectedAction = {
      type: 'SHOW_EVERYTHING',
      payload,
    };
    expect(actions.showEverythingOnSearch(payload)).toEqual(expectedAction);
  });
  it('should create an action to show selected article', () => {
    const payload = 'something';
    const expectedAction = {
      type: 'ARTICLE_SELECTED',
      payload,
    };
    expect(actions.selectArticle(payload)).toEqual(expectedAction);
  });
  it('should create an action to show changed term', () => {
    const payload = 'something';
    const expectedAction = {
      type: 'CHANGE_TERM',
      payload,
    };
    expect(actions.changeTerm(payload)).toEqual(expectedAction);
  });
  it('should create an action to show clicked button', () => {
    const expectedAction = {
      type: 'BUTTON_CLICKED',
    };
    expect(actions.buttonClicked()).toEqual(expectedAction);
  });
  it('should create an action to show array', () => {
    const payload = [];
    const expectedAction = {
      type: 'FETCH_HEADLINES',
      payload,
    };
    expect(actions.api(payload)).toEqual(expectedAction);
  });
});
