import React, { useState, useCallback, useEffect } from "react";

function Password() {

    const [length, setLength] = useState(8);
    const [number, setNumber] = useState(false);
    const [char, setChar] = useState(false);
    const [Pass, setPass] = useState('');

    const PasswordGenerator = useCallback(() => {
        let pas = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        if (number) str += "0123456789";
        if (char) str += "/^[!@#$%^&*()_+\-=\[\]{};':.<>?]*$/";

        for (let i = 1; i < length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pas += str.charAt(char)

        }

        setPass(pas)


    }, [length, number, char,setPass])


    useEffect(() => {
        PasswordGenerator()
    }, [length, number, char,PasswordGenerator])


    return (
        <React.Fragment>

            <div id='d1'>
                <h3 id='h3'>Password Generator</h3>

                <input id="input1" type="text" readOnly value={Pass}></input>
                <button id="copy">Copy</button><br /><br />
                <div id="div2">
                    <input type="range" minLength={6} maxLength={100} value={length} onChange={(e) => setLength(e.target.value)}></input>
                    <label>length:{length}</label>
                    <input type="checkbox" defaultValue={number} onChange={() => {
                        setNumber((prev) => (!prev))
                    }}></input>
                    <label>Number:{number}</label>

                    <input type="checkbox" defaultValue={char} onChange={() => {
                        setNumber((prev) => (!prev))
                    }}></input>
                    <label>Characters{
                        char}</label>

                </div>
            </div>
        </React.Fragment>
    )
}
export default Password;