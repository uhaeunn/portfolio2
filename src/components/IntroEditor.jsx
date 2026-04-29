import './IntroEditor.css'
import characterImg from '../images/character.png'

import { useRef, useState } from 'react';

function IntroEditor() {
    const inputRef = useRef(null);
    const [intro, setIntro] = useState('');

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div className='container'>
            <div className='input-container'>
                <input className='input'
                    ref={inputRef}
                    value={intro}
                    onChange={(e) => setIntro(e.target.value)}
                    placeholder="Write Here!"
                />
                <button onClick={focusInput} className = "button">Go to Input</button>
            </div>

            <div className='character-section'>
                <div className='speech-bubble'>
                    <p>{intro}</p>
                </div>
                <img src={characterImg} alt='character' className='character-img' />
            </div>
        </div>
    );
}

export default IntroEditor;

