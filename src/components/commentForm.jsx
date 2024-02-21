import "/src/App.css"
function CommentForm({ comment, setComment, agree, setAgree, send, children }) {

    const handleChange = (e) => {
        setComment(e.target.value);
    };
    const handleCheckboxChange = () => {
        setAgree(!agree);
    };

    const handleSubmit = (e) => {
        setAgree(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
      <textarea
          value={comment}
          onChange={handleChange}
          rows="8"
          cols="50"
      />
            <br />
            <label className= "agree-checkbox">
                <input
                    type="checkbox"
                    checked={agree}
                    onChange={handleCheckboxChange}
                />
                {children}
            </label>
            <br />
            <button className="send-button" type="submit">{send}
            </button>
        </form>
    );
}

export default CommentForm;