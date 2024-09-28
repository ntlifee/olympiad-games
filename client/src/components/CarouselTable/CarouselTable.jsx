import './carouseltable.css'

const CarouselTable = (props) => {

    const { answeredStatus, scores } = props

    return (
        <table className="carousel-table">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Цена</th>
                </tr>
            </thead>
            <tbody>
                {answeredStatus.map((status, index) => (
                    <tr className={status} key={index}>
                        <td>{index + 1}</td>
                        <td>{scores[index]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CarouselTable;