import { useEffect, useState } from "react";
import Button from "./components/Button";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import './index.css';
import axios from "axios";


function App() {
  const [photos,setPhotos] = useState([])
  const [update,setUpdate] = useState('')

  useEffect(()=>{
    axios.get("http://localhost:3000/get")
    .then((res)=>{
      console.log(res.data)
      setPhotos(res.data)
    })
    .catch((err) => console.log(err))
  },[update])
  return (
    <div>
      <Navbar />
      <Grid photos={photos} />
      <Button setUpdate={setUpdate}/>
    </div>
  );
}

export default App;
