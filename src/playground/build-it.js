class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggler = this.handleToggler.bind(this);
    this.state = {
      visible: false,
    }
  }
  handleToggler() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggler</h1>
        <button onClick={this.handleToggler}>{this.state.visible ? 'hide em' : 'show em'}</button>
        {this.state.visible && (
          <div>
            <p>deez nuts</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Toggler />, document.getElementById('app'));

// console.log('Hello');

// const app = {
//   visible: false,
//   onToggle() {
//     app.visible = !app.visible;
//     renderApp();
//   },
// };

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={app.onToggle}>Show Details</button>
//       {app.visible && (
//         <p>Deez nuts</p>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById('app'));
// }

// renderApp();
