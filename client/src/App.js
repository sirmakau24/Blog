import BlogContainer from './components/BlogContainer';

function App() {
  return (
    <div>
      <header>
        <h1>React Blog: Learning Components</h1>
      </header>

      <BlogContainer title="What is a React Component?">
<p>React components are reusable blocks of UI. They can be functional or class-based. Components help break your app into smaller, manageable parts.</p>
      </BlogContainer>

      <BlogContainer title="Styling Components in React">
        <p>You can style components using external CSS files, inline styles, or CSS-in-JS. External files keep styles organized and reusable.</p>
      </BlogContainer>
    </div>
  );
}

export default App;
