import React, {Component} from 'react';
import GuitarItem from './GuitarItem';

class GuitarList extends Component {
  render() {
    return (
      <section>
        <h3>My Guitars!</h3>
        <ul>
          {this.props.guitars.map((guitar, i) => 
            <GuitarItem 
              id={guitar.id}
              brand={guitar.brand} 
              model={guitar.model}
              key={i}
              
            />
          )}
        </ul>
      </section>
    );
  }
} 

export default GuitarList;