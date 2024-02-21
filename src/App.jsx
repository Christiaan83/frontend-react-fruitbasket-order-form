import './App.css'
import {useState} from "react";
import Fruitbox from "./components/fruitbox.jsx";
import RadioButton from "./components/radioButton.jsx";
import CommentForm from "./components/commentForm.jsx";
import InputField from "./components/inputField.jsx";


function App() {

    const [banaan, setBanaan] = useState(0);
    const [aardbei, setAardbei] = useState(0);
    const [appel, setAppel] = useState(0);
    const [kiwi, setKiwi] = useState(0);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState(null);
    const [zipcode, setZipcode] = useState("");
    const [deliveryFreq, setDeliveryFreq] = useState("");
    const [deliveryTimeslot, setDeliveryTimeslot] = useState('day-time');
    const [comment, setComment] = useState('');
    const [agree, setAgree] = useState(false);

    const reset = () => {
        setBanaan(0);
        setAardbei(0);
        setAppel(0);
        setKiwi(0);
    }


    return (
        <>
            <main className="outer-container">
                <section className="inner-container">
                    <h1>Fruitmand bezorgservice</h1>

                    <Fruitbox setName="🍌 Bananen " count={banaan} setCount={setBanaan}/>
                    <Fruitbox setName="🍓 Aarbeien " count={aardbei} setCount={setAardbei}/>
                    <Fruitbox setName="🍏 Appels " count={appel} setCount={setAppel}/>
                    <Fruitbox setName="🥝 Kiwi's " count={kiwi} setCount={setKiwi}/>
                    <button className="primary-btn" onClick={() => {
                        reset()
                    }}>Reset
                    </button>

                </section>
                <section>
                    <form className="form-field">

                        <InputField
                            label="Voornaam"
                            inputName="firstname"
                            idName="firstname-field"
                            typeInput="text"
                            valueName={firstname}
                            setValueName={setFirstname}
                        />

                        <InputField
                            label="Achternaam"
                            inputName="lastname"
                            idName="lastname-field"
                            typeInput="text"
                            valueName={lastname}
                            setValueName={setLastname}
                        />
                        <InputField
                            label="Leeftijd"
                            inputName="age"
                            idName="age-field"
                            typeInput="number"
                            valueName={age}
                            setValueName={setAge}
                        />
                        <InputField
                            label="Postcode"
                            inputName="zipcode"
                            idName="zipcode-field"
                            typeInput="text"
                            valueName={zipcode}
                            setValueName={setZipcode}
                        />
                        <div>
                            <label htmlFor="delivery-freq">Bezorgfrequentie</label>
                            <select
                                name="delivery-freq"
                                id="delivery-freq"
                                value={deliveryFreq}

                                onChange={(e) => setDeliveryFreq(e.target.value)}
                            >
                                <option value="week">iedere week</option>
                                <option value="every-other-week">om de week</option>
                                <option value="evry-month">iedere maand</option>
                            </select>
                        </div>
                        <div>
                            <RadioButton
                                selectedValue={deliveryTimeslot}
                                setDeliveryTimeslot={setDeliveryTimeslot}
                                children1="Overdag"
                                children2="'s Avonds"/>

                        </div>

                        <div>
                            <h2>Opmerking</h2>
                            <CommentForm
                                comment={comment}
                                setComment={setComment}
                                agree={agree}
                                setAgree={setAgree}
                                send="Verzend"
                                children="Ik ga akkoord met de voorwaarden"
                            />
                        </div>

                    </form>
                </section>
            </main>
        </>
    )
}

export default App
