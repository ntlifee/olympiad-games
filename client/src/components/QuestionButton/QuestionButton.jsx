import classes from './questionButton.module.css'

const QuestionButton = (props) => {
    const { setModalActive, level } = props;
    return (
        <td className={classes.question_button_wrapper}>
            <a href='#' className={classes.question_button} onClick={() => setModalActive(true)}>{level ? level * 10 : '?'}</a>
        </td>
    );
}

export default QuestionButton;