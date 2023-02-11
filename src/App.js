import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
    posts: [
      {
        id: 1,
        name: 'Thamyris cabral',
        count: 0,
      },
      {
        id: 2,
        name: 'Thamyris cabral',
        count: 0,
      },
      {
        id: 3,
        name: 'Thamyris cabral',
        count: 0,
      },
    ],
  };

  componentDidUpdate() {
    this.componentDidMount();
  }

  componentDidMount() {
    const { count } = this.state;

    setTimeout(() => {
      this.setState({ count: count + 1 });
    }, 1000);
  }

  render() {
    const { posts, count } = this.state;
    return (
      <div className='App'>
        <h1>{`Contagem: ${count}`}</h1>
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <p>{`Id:  ${post.id} ${post.name}`}</p>
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
