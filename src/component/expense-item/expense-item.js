import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { expenseDelete, expenseUpdate } from '../../action/expense-actions.js';
import ExpenseUpdate from '../expense-update/expense-update.js';

class ExpenseItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'default'
    };

    this.editMode = this.editMode.bind(this);
    this.defaultMode = this.defaultMode.bind(this);
  }

  editMode() {
    this.setState({ mode: 'edit' });
  }

  defaultMode() {
    this.setState({ mode: 'default' });
  }

  render() {

    if (this.state.mode === 'default') {
      return (
        <li onDoubleClick={this.editMode}>
          <h2>{this.props.expense.name}</h2>
          <p>Price: ${this.props.expense.price}</p>
          <button onClick={() => this.props.onRemove(this.props.expense)}>Delete</button>
          <p>{this.props.expense.timestamp}</p>
        </li>
      );
    } else {
      return (
        <ExpenseUpdate
          expense={this.props.expense}
          onCancel={this.defaultMode}
          onDone={this.defaultMode}
        />
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRemove: expense => dispatch(expenseDelete(expense)),
  onUpdate: expense => dispatch(expenseUpdate(expense)),
})

export default connect(null, mapDispatchToProps)(ExpenseItem);