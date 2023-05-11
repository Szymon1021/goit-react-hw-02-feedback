import PropTypes from "prop-types";

export const Statistics = ({ stats, total, positivePercentage }) => {
    return (
        <>
        <h2>Statistics:</h2>
                <div>
                    <p>Good: {stats.good }</p>
                    <p>Neutral:{stats.neutral }</p>
                    <p>Bad: {stats.bad}</p>
                    <p>Total:{total}</p>
                    <p>Positive feedback:{positivePercentage} </p>
        </div>
    </>
    )
}
Statistics.propTypes = {
stats: PropTypes.number.isRequired,
}