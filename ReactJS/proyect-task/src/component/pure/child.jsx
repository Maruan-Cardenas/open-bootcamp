import React, {useRef} from 'react';

const Child = ({ name, send, update }) => {
    const messageRef = useRef('')
    const nameRef = useRef('')
    function pressButton() {
        const text = messageRef.current.value
        alert(`Texto proveniente del Ref: ${text}`)
    }
    function pressButtonParams(text) {
        alert(`text: ${text}`)
    }
    function submitForm(e) {
        e.preventDefault()
        update(nameRef.current.value)
    }
    return (
        <div style={{backgroundColor: 'black'}}>
            <p onMouseOver={() => console.log('Mouse Over')}>Child Component {name}</p>
            <button onClick={() => console.log('Botón 1')}>Botón 1</button>
            <button onClick={pressButton}>Botón Ref</button>
            <button onClick={() => pressButtonParams('He pulsado el botón 3')}>Botón 3</button>
            <input 
            ref={messageRef}
            type="text"
            value={messageRef.current.value}
            placeholders={'Insert a text'} 
            onFocus={() => console.log('On Focues')} 
            onChange={(e) => console.log(e.target.value)} 
            onCopy={(e) => console.log(e.target.value)} 
            onPaste={(e) => console.log(e.target.value)}/>
            <button onClick={() => send(messageRef.current.value)}>Send Message</button>
            <div style={{marginTop:'20px'}}>
                <form onSubmit={submitForm}>
                    <input
                    ref={nameRef}
                    placeholder='New Name'
                    type="text" />
                    <input type="submit" value='Update Me' />
                </form>
            </div>
        </div>
    );
}

export default Child;
