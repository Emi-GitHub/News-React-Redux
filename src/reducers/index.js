import { combineReducers } from 'redux';
import { headlines } from './ArticlesReducer';
import { selectedArticle } from './ArticlesReducer';
import { termHome } from './ArticlesReducer';
import { termEverything } from './ArticlesReducer';
import { selectedOption } from './ArticlesReducer';
import { background } from './UiReducer';
import { loaded } from './UiReducer';
import { loading } from './UiReducer';
import { forSearch } from './UiReducer';
import { forHeader } from './UiReducer';
import { setShow } from './ShowReducer';
import { showEverything } from './ShowReducer';

export default combineReducers({
  headlines,
  selectedArticle,
  termHome,
  termEverything,
  showEverything,
  setShow,
  background,
  loaded,
  loading,
  forSearch,
  forHeader,
  selectedOption,
});
