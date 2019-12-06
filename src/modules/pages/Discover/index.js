import React, {useState, useEffect} from 'react';
import DiscoverPageLayout from './layout';
import axios from 'axios';




const DiscoverPage = () => {

    const [NewWord, setNewWord] = useState("")
    const [Gifs, setGifs] = useState([])

      useEffect(() => {
        getWord(); 
      },[]);

    const getWord = async () => {
        const API =
          "https://random-word-api.herokuapp.com//word?key=SRL5CDAG&number=1";
        const response = await axios.get(API);
        setNewWord(response.data)
        

    }

    const giphyWord = async () => {
        const API =
          "http://api.giphy.com/v1/gifs/search?q=car&api_key=GgTq9z475Lz0qG8FVK4twfwDIWjoCybp&limit=5";
        const response = await axios.get(API)
        setGifs(response.data.data)
        console.log(Gifs);
    }
    



    return (
      <div>
          <div>
            <button onClick={giphyWord}>Start</button>
          </div>
          <div>
            {Gifs.map( (gif, index) => (
              <img src={gif.url} alt="gif" key={index} />
            ))}
          </div>
        <DiscoverPageLayout />
      </div>
    );
}


export default DiscoverPage;