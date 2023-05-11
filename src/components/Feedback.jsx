


export const Feedback = ({ handleChange }) =>  {

   
        return (
            <div>
                <h2>Please leave feedback</h2>
                <button onClick={handleChange}>Good</button>
                <button onClick={handleChange}>Neutral</button>
                <button onClick={handleChange}>Bad</button>
                
            </div>
        )
    
}
