// pages/index.js
import { useState, useEffect } from 'react'
import Link from 'next/link';
import TopBar from './components/TopBar';
import Body from './components/Body';
import Footer from './components/Footer';
import axios from 'axios'

const Home = () => {

  const [place, setPlace] = useState('')
  const [resdata, setResdata] = useState([])

  const searchApi = async () => {
    //console.log('place : ', place)
    const res = await axios.get(`http://localhost:4000/places?query=${place}`, {
      headers: {
        'api-key': 'AIzaSyAuUj-2rfFOQxhMPVKQSe-xI-gt3-Hrpws'
      }
    });
    console.log('res : ', JSON.stringify(res.data, null, 2));
    setResdata(res.data)
  }

  return (
    <div className="container text-center">
      <TopBar searchApi={searchApi} setPlace={setPlace} />
      <Body place={place} resdata={resdata} />
      <Footer />
    </div>

  );
}

export default Home;
