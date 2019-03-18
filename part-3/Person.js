class Person extends React.Component {
    render() {
        const { age, name, hobbies} = this.props;
        return (
            <div>
                <p>Learn more about this person!</p>
                <div>
                    <div> { name.length>8? name.slice(0,6) : name } </div>
                    <div> { age } </div>
                </div>
                <div> { age>18? "please go vote!" : "you must be 18 to vote" } </div>
                <ul> { hobbies.map(h => <li>{h}</li>) } </ul>
            </div>
        );
    }
  }