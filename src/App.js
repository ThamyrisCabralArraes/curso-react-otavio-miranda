import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [],
  };

  // componentDidUpdate() {
  //   this.componentDidMount();
  // }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;
    return (
      <div className='App'>
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// function App() {
//
// }

export default App;
