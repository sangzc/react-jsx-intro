const props = [
    {name: "Sandy", username: "qu33n", date: Date(), message: "message1"},
    {name: "Gabz", username: "pleb", date: Date(), message: "message2"},
    {name: "Whiskey", username: "qtPI", date: Date(), message: "message3"}
]


ReactDOM.render(
    <div>
        <App tweets= { props } />
    </div>,
    document.getElementById("root")
  );

