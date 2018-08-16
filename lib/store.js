import {createStore, combineReducers} from 'redux';
import categoriesState from '../src/reducer/category.js';
import expensesState from '../src/reducer/expense.js';

const rootReducer = combineReducers({
  categoriesState,
  expensesState,
});

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());