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
    this.loadPost();
  }

  loadPost = async () => {
    const responsePost = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([responsePost, photosResponse]);
    const postJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });

    this.setState({ posts: postsAndPhotos });
  };

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <div className='posts'>
          {posts.map((post) => (
            <div className='post'>
              <img
                src={post.cover}
                alt={post.title}
              />
              <div
                key={post.id}
                className='post-card'
              >
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

// function App() {
//
// }

export default App;
