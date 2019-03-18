class App extends React.Component {
    render() {
        console.log(this.props.name)
        return (
             <div>
                 <FirstComponent />
                 <NamedComponent name={this.props.name}/>
             </div>
        );
    }
  }