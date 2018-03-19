console.log('Hello');

const app = {
  visible: false,
  onToggle() {
    app.visible = !app.visible;
    renderApp();
  },
};

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={app.onToggle}>Show Details</button>
      {app.visible && (
        <p>Deez nuts</p>
      )}
    </div>
  );
  ReactDOM.render(template, document.getElementById('app'));
}

renderApp();
