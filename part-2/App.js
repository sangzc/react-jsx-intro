class App extends React.Component {
    render() {
        const tweets = this.props.tweets;
        console.log(tweets)
        return (
             <div>

                {tweets.map(t =>
                    <Tweet 
                    name={t.name}
                    username={t.username}
                    date={t.date}
                    message={t.message}
                    />
                    )}
             </div>
        );
    }
  }