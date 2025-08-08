const BlogContainer = ({ title, children }) => {
  return (
    <div className="blog-container">
      <h2>{title}</h2>
      <div className="blog-content">
        {children}
      </div>
    </div>
  );
};

export default BlogContainer;
