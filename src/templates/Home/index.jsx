import './index.css';
import { Component } from 'react';

import { loadPost } from '../../utils/load-posts';
import { Posts } from '../../Posts/Index';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: '',
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

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const disabledPosts = page + postsPerPage >= allPosts.length;
    const filterPosts = !!searchValue
      ? allPosts.filter((post) =>
          post.title.toLowerCase().includes(searchValue.toLocaleLowerCase()),
        )
      : posts;

    return (
      <section className='container'>
        <TextInput
          searchValue={searchValue}
          handleChange={this.handleChange}
        />
        <Posts posts={filterPosts} />
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
