import { Component } from 'react';

export class TextInput extends Component {
  render() {
    const { searchValue, handleChange } = this.props;
    return (
      <div>
        {!!searchValue && (
          <div>
            <h1> Search: {searchValue}</h1>
          </div>
        )}
        <input
          className='input-search'
          type='search'
          onChange={handleChange}
          value={searchValue}
          placeholder={'search'}
        />
      </div>
    );
  }
}
