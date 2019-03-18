class Tweet extends React.Component {
    render() {
        const { username, name, date, message} = this.props
        return (
            <div>
                <div>
                    <span> { username } </span>
                    <span> { date } </span>
                </div>
                <div> { name } </div>
                <p> { message } </p>
            </div>
        );
    }
  }