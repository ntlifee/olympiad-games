import './questionButton.css'

const QuestionButton = (props) => {
    const { level } = props;
    return (
        <a href='#' className='question-button'>{level ? level * 10 : '?'}</a>
    );
}

export default QuestionButton;