import './questionButton.css'

const QuestionButton = (props) => {
    const { setModalActive, level } = props;
    return (
        <a href='#' className='question-button' onClick={() => setModalActive(true)}>{level ? level * 10 : '?'}</a>
    );
}

export default QuestionButton;