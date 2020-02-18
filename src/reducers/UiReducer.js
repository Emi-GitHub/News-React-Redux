export const background = (state = 'ui text loader', action) => {
  switch (action.type) {
    case 'CHANGE_BACKGROUND':
      return 'background';
    default:
      return state;
  }
};

export const loaded = (state = 'loaded-api', action) => {
  switch (action.type) {
    case 'CHANGE_LOADED':
      return 'nothing';
    default:
      return state;
  }
};

export const loading = (state = 'loaded-api', action) => {
  switch (action.type) {
    case 'CHANGE_LOADING':
      return 'nothing';
    default:
      return state;
  }
};

export const forSearch = (state = 'hide-app', action) => {
  switch (action.type) {
    case 'CHANGE_FORSEARCH':
      return 'nothing';
    default:
      return state;
  }
};

export const forHeader = (state = 'hide-app', action) => {
  switch (action.type) {
    case 'CHANGE_FORHEADER':
      return 'topheadlines-card';
    default:
      return state;
  }
};
