import classes from './gameinformationpanel.module.css'

const GameInformationPanel = (props) => {
    const { score, time } = props;
    return (
        <div className={classes.information_panel}>
            <div className={classes.score}>
                <span className={classes.score_string}>ОЧКИ</span>
                <span className={classes.score_int}>{score ? score : 0}</span>
            </div>
            <div className={classes.time}>
                <span className={classes.time_string}>ВРЕМЯ</span>
                <span className={classes.time_date}>{time ? time : '00:00:00'}</span>
            </div>
        </div>
    );
}

export default GameInformationPanel;