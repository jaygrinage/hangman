import React, {useState} from 'react';
import './layout.css';
// import { WordGen } from 'modules/components';




const DiscoverPageLayout= () => {

    const Letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const word = "WORD"
    const [GuessedWord, setGuessedWord] = useState([])



    const checkLetter = (guess) => {

        if (GuessedWord.includes(guess)) {
            prompt("already guessed")
        }
        else if (word.includes(guess)) {
            console.log("correct")

        }
        else {
            console.log("wrong!")
        }

        setGuessedWord([...GuessedWord, guess])

    }


    return (
        <div>
            <section className="wordContainer">
                {word.split("").map((letter, index) => (
                    <div  key={index}>
                        {GuessedWord.includes(letter) ? letter : "-" }
                    </div>
                ))} 
            </section>
            <section className="buttonContainer">
                {Letters.map((letter, index) => {
                    return (<button className={GuessedWord.includes(letter) ? "disabled" : "glow-on-hover"} key={index} onClick={() => checkLetter(letter)}>{letter}</button>)
                })}
                </section>

        </div>
    );
}

export default DiscoverPageLayout;