class IndecisionApp extends React.Component {
  render () {
    const title = 'Indecison';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Number one', 'Number two', 'Number tres',];
    
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render () {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render () {
    return (
      <div>
        <p>Options Component</p>
        <p>{this.props.options.length}</p>
        {this.props.options.map((option) => <Option key={option} optionText={option} />)}
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>
        <p>Some option</p>        
        <p>{this.props.optionText}</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render () {
    return (
      <div>
        <p>AddOption Component</p>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));