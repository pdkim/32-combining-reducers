import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import CategoryForm from '../category-form/category-form.js';
import CategoryItem from '../category-item/category-item.js';


// const CategoryList = props => {
//   return (
//     <Fragment>
//       <h3>Categories</h3>
//       <ul>
//         {props.categories.map(category => (
//           <CategoryItem key={category.id} category={category} />
//         ))}
//       </ul>
//     </Fragment>
//   )
// };

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <Fragment>
        <nav>
          <ul>
            <li>
              <NavLink className="link" exact to="/">Dashboard</NavLink>
            </li>
          </ul>
        </nav>
        <CategoryForm />
        <h3>Categories</h3>
        <ul>
          {this.props.categories.map(category => (
           <CategoryItem key={category.id} category={category} />
         ))}
       </ul>
      </Fragment>
    )
  }
}
const mapStateToProps = state => ({
  categories: state,
});

export default connect(mapStateToProps)(Dashboard);