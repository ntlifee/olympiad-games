import './gameinformationpanel.css'

const GameInformationPanel = (props) => {
    const { score, time } = props;
    return (
        <div className="information_panel">
            <div className="score">
                <p className='score_string'>ОЧКИ</p>
                <p className="score_int">{score ? score : 0}</p>
            </div>
            <div className="time">
                <p className='time_string'>ВРЕМЯ</p>
                <p className="time_date">{time ? time : '00:00:00'}</p>
            </div>
        </div>
    );
}

export default GameInformationPanel;