import "/src/App.css"
function RadioButton({ selectedValue, setDeliveryTimeslot, children1, children2 }) {

    const handleChange = (e) => setDeliveryTimeslot(e.target.value)
    return (
            <div className="radioButton">
                <label className="radio-field">

                    <input
                        type="radio"
                        value="day-time"
                        checked={selectedValue === 'day-time'}
                        onChange={handleChange}
                    />
                    {children1}
                </label>
                <label className="radio-field">
                    <input
                        type="radio"
                        value="evening"
                        checked={selectedValue === 'evening'}
                        onChange={handleChange}
                    />
                    {children2}
                </label>
            </div>
        );
}

export default RadioButton;