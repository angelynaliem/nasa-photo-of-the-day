import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";


function App() {

  // Adding the state for the data to get from NASA.
  const [nasaData, setNasaData] = useState()

  //Adding effect hook to handle the API call side effect.
  useEffect(() => {

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY') //Fetching NASA data with the given endpoint via Axios.

.then(response => {
  console.log(response) //Console.log the data for now.
})

.catch(error => {
  console.log('error!', error) //If the data is not fetched properly, it will return this error
})

.then(function() {
}) //Add the next function we want to do here. Blank currently.


    // return () => {

    // }
  }, []) //Adding an empy dependency array here.

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;

// - [ ] In your `.then()` make sure to `console.log` the response so you can look at the shape of the data. 😃
// - [ ] Before you add your data to state, make sure your effect hook has a dependency array (probably 
// empty, since we don't want this effect synced up to any state/props), otherwise you will start an 
// **infinite loop, and you will exceed the API rate limits of the DEMO_KEY and need to use a real API_KEY.**