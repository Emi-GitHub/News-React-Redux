export const setShow = (state = false, action) => {
  switch (action.type) {
    case 'BUTTON_CLICKED':
      return true;
    default:
      return state;
  }
};

export const showEverything = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_EVERYTHING':
      return action.payload;
    default:
      return state;
  }
};
