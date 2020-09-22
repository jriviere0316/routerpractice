import React, {Component} from 'react';

class Quote extends Component {
  render() {
    return (
      <section className="quote">
        <h3>Quote of the Day:</h3>
        <img src={this.props.image} alt="quoteimage" />
        <blockquote><em>{this.props.quote}</em></blockquote>
        <blockquote>- {this.props.author}</blockquote>
        <div className="clearfix"></div>
      </section>
    );
  }
} 

export default Quote;