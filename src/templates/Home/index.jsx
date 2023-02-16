import './index.css';
import { Component } from 'react';

import { loadPost } from '../../utils/load-posts';
import { Posts } from '../../Posts/Index';
import { Button } from '../../components/Button';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
  };

  componentDidMount() {
    this.loadPost();
  }

  loadPost = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPost();

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    // posts.push(...nextPosts);

    this.setState({ posts: nextPosts, page: nextPage });
  };

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const disabledPosts = page + postsPerPage >= allPosts.length;

    return (
      <section className='container'>
        <Posts posts={posts} />
        <Button
          text={'Load more Posts'}
          onClick={this.loadMorePosts}
          disabled={disabledPosts}
        />
      </section>
    );
  }
}

export default Home;
