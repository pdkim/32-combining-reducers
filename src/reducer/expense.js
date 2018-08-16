import defaultState from '../component/default/default.js';

export default (state = defaultState, action) => {

  let { type, payload } = action;

  switch (type) {
    case 'EXPENSE_CREATE':
      return {
        ...state,
        expenses: [...expenses.state, payload],
      };
    case 'EXPENSE_UPDATE': return state.map(category => category.id === payload.id ? payload : category);
    case 'EXPENSE_DELETE': return state.filter(category => category.id !== payload.id);
    case 'EXPENSE_RESET': return defaultState;
    default: return state;
  }
};