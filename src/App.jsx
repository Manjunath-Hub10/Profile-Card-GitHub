import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Card from './pages/Card';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const URL = "https://api.github.com/users/Manjunath-Hub10";
  useEffect(() => {
    axios.get(URL)
      .then(function (response){
        // handle success
        setData(response.data)
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

    console.log(data.login);

  const navigateCard = () => {
    navigate("card");
  }

  const navigateHome = () => {
    navigate("/")
  }


  return (
      <Routes>
          <Route path="/" element={<Home navigateHome={navigateHome} navigateCard={navigateCard} />}/>
          <Route path="card" element={<Card navigateHome={navigateHome} navigateCard={navigateCard} data={data} />}/>
      </Routes>
  )
}

export default App
