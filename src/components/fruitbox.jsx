// eslint-disable-next-line react/prop-types
import "/src/App.css"
function Fruitbox({setName, count, setCount}){

    const setCounter = (action) =>{
        setCount((val) => val + action)
}

return(
        <section className="fruitbox" >
         <h1>{setName}</h1>
            <div>
             <button
                 className="count-button"
                 type="button" disabled={count === 0}
                 onClick={()=>{ count > 0 && setCounter(-1)}}>-</button>
             <p>{count}</p>
                <button className="count-button" onClick={() => {setCounter((1))}}>+</button>
            </div>
        </section>
    );
}

export default Fruitbox;