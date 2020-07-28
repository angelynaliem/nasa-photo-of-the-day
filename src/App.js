import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';


function App() {

  // Adding the state for the data to get from NASA.
  const [nasaData, setNasaData] = useState([])
  const [nasaExplanation, setNasaExplanation] = useState([])
  const [nasaTitle, setNasaTitle] = useState([])
  const [nasaDate, setNasaDate] = useState([])
  const [nasaCopyright, setNasaCopyright] = useState([])

  //Adding effect hook to handle the API call side effect.
  useEffect(() => {

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-07-25') //Fetching NASA data with the given endpoint via Axios.

.then(response => {
  console.log(response) //Console.log the data for now.

  setNasaData(response.data.hdurl)
  setNasaExplanation(response.data.explanation)
  setNasaTitle(response.data.title)
  setNasaDate(response.data.date)
  setNasaCopyright(response.data.copyright)
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
    <Header nasaTitle={nasaTitle}/>
    <Body nasaData={nasaData} nasaExplanation={nasaExplanation} nasaDate={nasaDate} />
    <Footer nasaCopyright={nasaCopyright}/>
    </div>
  )
}

export default App;