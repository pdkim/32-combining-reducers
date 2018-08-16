import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { categoryDelete, categoryUpdate } from '../../action/category-actions.js';
import CategoryUpdate from '../category-update/categoryUpdate.js';
import ExpenseForm from '../expense-form/expense-form.js';
import ExpenseItem from '../expense-item/expense-item.js';

class CategoryItem extends Component {

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
          <h2>{this.props.category.name}</h2>
          <p>Budget: ${this.props.category.budget}</p>
          <p>ID: {this.props.category.id}</p>
          <button onClick={() => this.props.onRemove(this.props.category)}>Delete</button>
          <p>{this.props.category.timestamp}</p>
        </li>
      );
    } else {
      return (
        <Fragment>
          <CategoryUpdate
            category={this.props.category}
            onCancel={this.defaultMode}
            onDone={this.defaultMode}
          />
          <ExpenseForm />
          <h3>Categories</h3>
          <ul>
            {this.props.expenses.map(expense => (
              <ExpenseItem key={expense.id} expense={expense} />
            ))}
          </ul>
        </Fragment>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRemove: category => dispatch(categoryDelete(category)),
  onUpdate: category => dispatch(categoryUpdate(category)),
})

export default connect(null, mapDispatchToProps)(CategoryItem);