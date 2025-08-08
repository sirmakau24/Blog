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

      <BlogContainer title="Components are the building blocks of React.">
        <p>Components encapsulate logic and UI. They can accept props to customize their behavior and appearance, making them flexible and powerful.</p>
      </BlogContainer>

    </div>
  );
}

export default App;
