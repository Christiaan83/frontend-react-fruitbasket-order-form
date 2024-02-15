// eslint-disable-next-line react/prop-types
function Fruitbox({setName, count, setCount}){

    const setCounter = (action) =>{
        setCount((val) => val + action)
}

return(
        <div>
         <h1>{setName}</h1>
         <button type="button" disabled={count === 0} onClick={()=>{ count > 0 && setCounter(-1)}}>-</button>
         <p>{count}</p>
            <button onClick={() => {setCounter((1))}}>+</button>
        </div>
    );
}

export default Fruitbox;