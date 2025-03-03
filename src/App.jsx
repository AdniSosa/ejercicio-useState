import './App.css'
import { useState } from 'react';

function App() {
    const [name, setName] = useState('Sofía');
    const [newName, setNewName] = useState('');

    const namesArray = ['Data', 'Reyes', 'Yolanda'];

    return (
        <div>
            <h2>Teacher Name {name}</h2>
            <ul>{namesArray.map(teacherName =>
                <li onClick={setName(teacherName)}>{teacherName}</li>
            )}
            </ul>
        </div>
    )
}

export default App;
