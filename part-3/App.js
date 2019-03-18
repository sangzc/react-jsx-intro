class App extends React.Component {
    render() {
        const people = this.props.people;
        return (
             <div>
                {people.map(p =>
                    <Person 
                    name={p.name}
                    age={p.age}
                    hobbies={p.hobbies}
                    />
                    )}
             </div>
        );
    }
  }