
import './App.css'
import {useState} from "react";
import Fruitbox from "./components/fruitbox.jsx";

function App() {
    const [banaan, setBanaan] = useState(0);
    const [aardbei, setAardbei] = useState(0);
    const [appel, setAppel] = useState(0);
    const [kiwi, setKiwi] = useState(0);

    return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <Fruitbox setName= "🍌 Bananen " count={banaan} setCount={setBanaan}/>
        <Fruitbox setName= "🍓 Aarbeien " count={aardbei} setCount={setAardbei}/>
        <Fruitbox setName= "🍏 Appels " count={appel} setCount={setAppel}/>
        <Fruitbox setName= "🥝 Kiwi's " count={kiwi} setCount={setKiwi}/>




    </>
  )
}

export default App
