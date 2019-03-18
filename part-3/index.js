const people = [
    {name: "Sandy", age: 26, hobbies: ["volleyball", "sushirritoes"]}, 
    {name: "Gab", age: 24, hobbies: ["weightlifting", "tattoos"]},
    {name: "Whiskey", age: 8, hobbies: ["cuddles", "popcorn"]}
]



ReactDOM.render(
    <div>
        <App people= { people } />
    </div>,
    document.getElementById("root")
);
