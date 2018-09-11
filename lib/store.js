import {createStore, combineReducers} from 'redux';
import categoryState from '../src/reducer/category.js';
import expensesState from '../src/reducer/expense.js';

const appReducer = combineReducers({
  categoryState,
  expensesState,
});

export default createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());