import "/src/App.css"

function InputField ({ label,inputName, typeInput, idName,valueName, setValueName }) {

return (

        <div className="input-field">
            <label htmlFor={idName}>{label}</label>
            <input
                name= {inputName}
                id={idName}
                type={typeInput}
                value={valueName}
                onChange={(e) => setValueName(e.target.value)}
            />
        </div>
);
}

export default InputField;