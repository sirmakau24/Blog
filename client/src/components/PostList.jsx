import Post from './Post';

const posts = [
  { id: 1, title: 'First Post', content: 'Hello Makau' },
  { id: 2, title: 'Second Post', content: 'Learning React is exciting.' },
  {id: 3, title: 'Third Post', content: 'Components are the building blocks of React.' }
];

const PostList = () => (
  <div>
    {posts.map(post => (
      <Post key={post.id} title={post.title} content={post.content} />
    ))}
  </div>
);

export default PostList;

