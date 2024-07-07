import './App.css';
import {useState, useEffect} from 'react'
import {SearchBox} from './components/SearchBox/SearchBox.jsx'
import CardList from './components/CardList/CardList.jsx';

const App = () => {
    const [query, setQuery] = useState('')
    const [originalPhotos, setOriginalPhotos] = useState([])
    const [photos, setPhotos] = useState([])

    // load component data from api
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response)=>response.json())
        .then((photos)=> { setOriginalPhotos(photos.slice(0, 50)); setPhotos(photos.slice(0, 50))})
    }, [])

    // reloading on search 
    useEffect(()=>{
        //TODO search login here
        const searchedPhotos = [];
         originalPhotos.forEach( (photo) => { 
                            if(photo?.title.includes(query)) 
                                searchedPhotos.push(photo); 
            } )
        setPhotos(searchedPhotos)

    }, [query]) // dependencies array
    return (
        <div className="gallery">
            <SearchBox placeholder='Search photo' value={query}  onChange={(event) => setQuery(event.target.value) }/>
            <div className="gallery-content">
                <CardList photos= {photos}/>
            </div>
        </div>
    )

}
// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             album: [ ],
//             query: ''
//         }
//     }

//     componentDidMount(){
//        fetch('https://jsonplaceholder.typicode.com/photos')
//        .then((response) => response.json())
//        .then((users)=> this.setState({album: users}))
//     }
//     render() {
//         return (
//             <div className="App">
//                 <div>
//                     <input placeholder='Search photo' value={this.state.s}/>
//                 </div>
//                 <header className="App-header">
//                     {
//                         this.state.album.map((monster=>{
//                             return <div key={monster.id}><h1>{monster.title}</h1></div>
//                         }))
//                     }
//                     {/* <h1>{this.state.name}</h1> */}
//                     {/* <button onClick={() => {
//                         this.setState({ name: "satya" }, () => {
//                             console.log(this.state)
//                         })
//                     }}>change name</button> */}
//                 </header>
//             </div>
//         )
//     };
// }

export default App;
