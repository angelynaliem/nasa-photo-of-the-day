import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';


function App() {

  // Adding the state for the data to get from NASA.
  const [nasaData, setNasaData] = useState([])

  //Adding effect hook to handle the API call side effect.
  useEffect(() => {

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY') //Fetching NASA data with the given endpoint via Axios.

.then(response => {
  console.log(response) //Console.log the data for now.

  setNasaData(response.data.hdurl)
})

.catch(error => {
  console.log('error!', error) //If the data is not fetched properly, it will return this error
})

.then(function() {
}) //Add the next function we want to do here. Blank currently.


    // return () => {

    // }
  }, []) //Adding an empty dependency array here.

  return (
    <div>
    <Header/>
    <Body nasaData={nasaData}/>
    <Footer/>
    </div>
  )
}

export default App;