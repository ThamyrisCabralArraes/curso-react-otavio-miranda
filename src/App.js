import './App.css';
import { Component } from 'react';

import { loadPost } from './utils/load-posts';
import { Posts } from './Posts/Index';

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPost();
  }

  loadPost = async () => {
    const postsAndPhotos = await loadPost();

    this.setState({ posts: postsAndPhotos });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className='container'>
        <Posts posts={posts} />
      </section>
    );
  }
}

export default App;
