import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {
    const [name, setName] = useState('Maruan')
    function showMessage (text) {
        alert(text)
    }
    function updateName(newName){
        setName(newName)
    }
    return (
        <div style={{backgroundColor: 'orange'}}>
            <Child name={name} send={showMessage} update={updateName}/>
        </div>
    );
}

export default Father;
