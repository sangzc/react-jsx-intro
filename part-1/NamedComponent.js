class NamedComponent extends React.Component {
    render() {
        const { name } = this.props
        return (
             <p>My name is { name }.</p>
        );
    }
  }