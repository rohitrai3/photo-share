import Post from './Post';

const DUMMY_POSTS = [
  {
    id: 'id1',
    username: 'username1',
    userImg: 'https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png',
    img: 'https://raw.githubusercontent.com/rohitrai3/resources/main/images/photo-share-text.png',
    caption: 'this is first caption'
  },
  {
    id: 'id2',
    username: 'username2',
    userImg: 'https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png',
    img: 'https://raw.githubusercontent.com/rohitrai3/resources/main/images/photo-share-text.png',
    caption: 'this is second caption'
  },
];

function Posts() {
  return (
    <div>
      {DUMMY_POSTS.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
