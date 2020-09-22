import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class GuitarItem extends Component {

  render() {
    return (
      <li>
        {this.props.brand} {this.props.model} 
      </li>
    );
  }
} 


// "Decorate" our component with `props.router`
export default withRouter(GuitarItem);

// Equivalent to:
// const HarmonicaItemWithRouter = withRouter(HarmonicaItem);
// export default HarmonicaItemWithRouter;