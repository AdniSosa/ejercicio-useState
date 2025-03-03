import './App.css'
import { useState } from 'react';

function App() {
    const [name, setName] = useState('Sofía');
    const [newName, setNewName] = useState('');

    const namesArray = ['Data', 'Reyes', 'Yolanda'];
    //console.log(setNewName(namesArray.map(names => names)))

    const changeName = (e) => {
        e.preventDefault();

        if(newName !== '') {
            setName(newName);
            setNewName('');
        }
    }
    return (
        <div>
            <h2>Teacher Name {name}</h2>
            <form onSubmit={changeName}>
                <input type='text' value={newName}  onChange={(e) => setNewName(e.target.value)} placeholder='Add a name'/>
                <button type='submit'>Add</button>
            </form>
            <ul>{namesArray.map(names => 
                <li onClick={() => setName(names)}>{names}</li>
            )}
            </ul>
        </div>
    )
}

export default App;
