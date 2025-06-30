const React = require('react');
const { Suspense } = React;
// require("./App.css");

function Header() {
  return React.createElement('h1', null, 'Header (Fast Render)');
}

function Post() {
  // Simulate long render
  const content = Array.from({ length: 5000 }, (_, i) =>
    React.createElement('p', { key: i }, `Post content line ${i}`)
  );
  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'Post (Slow Render)'),
    ...content
  );
}

const LazyPost = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ default: Post });
      }, 2000); // Delay for demo
    })
);

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Header, null),
    React.createElement(
      Suspense,
      { fallback: React.createElement('p', null, 'Loading post...') },
      React.createElement(LazyPost, null)
    )
  );
}

module.exports = App;