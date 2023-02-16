import { Component } from 'react';

export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <button
        className='button-next-page'
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
}
