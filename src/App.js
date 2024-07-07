import { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            album: [ ],
            query: ''
        }
    }

    componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/photos')
       .then((response) => response.json())
       .then((users)=> this.setState({album: users}))
    }
    render() {
        return (
            <div className="App">
                <div>
                    <input placeholder='Search photo' value={this.state.s}/>
                </div>
                <header className="App-header">
                    {
                        this.state.album.map((monster=>{
                            return <div key={monster.id}><h1>{monster.title}</h1></div>
                        }))
                    }
                    {/* <h1>{this.state.name}</h1> */}
                    {/* <button onClick={() => {
                        this.setState({ name: "satya" }, () => {
                            console.log(this.state)
                        })
                    }}>change name</button> */}
                </header>
            </div>
        )
    };
}

export default App;
