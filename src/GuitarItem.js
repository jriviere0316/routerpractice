import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class GuitarItem extends Component {

  onDelete = () => {
    // Tell my parent to delete me
    this.props.onDelete(this.props.id);

    alert(`Deleted your ${this.props.brand}. Going Home.`);

    console.log('this.props.history', this.props.history);
    this.props.history.push('/');
  }

  render() {
    return (
      <li>
        {this.props.brand} {this.props.model} 
        <button onClick={this.onDelete}>
          Delete
        </button>
      </li>
    );
  }
} 


// "Decorate" our component with `props.router`
export default withRouter(GuitarItem);

// Equivalent to:
// const HarmonicaItemWithRouter = withRouter(HarmonicaItem);
// export default HarmonicaItemWithRouter;