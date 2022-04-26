import React, { useState } from 'react'


export default function TextForm(props) {


    const [text, setText] = useState('');

    const upperCase = () => {
        let upCase = text.toUpperCase();
        setText(upCase);
        props.showAlert("Converted into Uppercase", "Success !");
    }

    const lowerCase = () => {
        let loCase = text.toLowerCase();
        setText(loCase);
        props.showAlert("Converted into Lower Case", "Success !");

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const clearText = () => {
        let clearT = ""
        setText(clearT);
        props.showAlert("Text cleared", "Success !");

    }

    const handletextExtract = () => {
        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1)
    }

    const handleNumExtract = () => {
        const regex = /[0-9/ /]/g;

        const digits = text.match(regex);
        const res = digits.join('');
        setText(res)
    }

    const intoTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
    }

    const reverseWord = () => {

        // setText(text.split('').reverse().join('')
        let reverseText = text.split("").reverse().join("");;
        setText(reverseText);


    }

    const textCopy = () => {
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied", "Success !");

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed", "Success !");

    }
    return (
        <>

            <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button type="submit" className="btn btn-warning mx-2 my-2" onClick={speak}>Speak</button>
                <button type="button" className="btn btn-primary mx-1" onClick={upperCase}>Uppercase</button>
                <button type="button" className="btn btn-secondary mx-1" onClick={lowerCase}>Lowercase</button>
                <button type="submit" className="btn btn-warning mx-2 my-2" onClick={handletextExtract}>Remove Symbols</button>
                <button type="submit" className="btn btn-info mx-2 my-2" onClick={handleNumExtract}>Extract numbers</button>
                <button type="submit" className="btn btn-warning mx-2 my-2" onClick={intoTitleCase}>Title Case</button>
                <button type="submit" className="btn btn-info mx-2 my-2" onClick={reverseWord}>Reverse text</button>
                <button type="submit" className="btn btn-danger mx-2 my-2" onClick={textCopy}>Copy Text</button>
                <button type="submit" className="btn btn-warning mx-2 my-2" onClick={handleExtraSpace}>Remove Space</button>
                <button type="button" className="btn btn-success mx-1" onClick={clearText}>Clear</button>
            </div>
            <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter any text in the above box to preview"}</p>
            </div>

        </>
    )
}
