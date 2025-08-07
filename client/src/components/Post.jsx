const Post = ({ title, content }) => (
  <div style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

export default Post;