import React, {Component} from 'react';
import {connect} from 'react-redux';
import {categoryDelete, categoryUpdate} from '../../action/category-actions.js';
import CategoryUpdate from '../category-update/categoryUpdate.js';

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
    this.setState({mode: 'edit'});
  }

  defaultMode() {
    this.setState({mode: 'default'});
  }

  render() {

    if(this.state.mode === 'default') {
      return (
        <li onDoubleClick={this.editMode}>
          <h2>{this.props.category.name}</h2>
          <p>{this.props.category.budget}</p>
          <button onClick={() => this.props.onRemove(this.props.category)}>Delete</button>
          <p>{this.props.category.timestamp}</p>
        </li>
      );
    } else {
      return (
        <CategoryUpdate
          category={this.props.category}
          onCancel={this.defaultMode}
          onDone={this.defaultMode}
        />
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRemove: category => dispatch(categoryDelete(category)),
  onUpdate: category => dispatch(categoryUpdate(category)),
})

export default connect(null, mapDispatchToProps)(CategoryItem);