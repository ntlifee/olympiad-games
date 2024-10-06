import classes from './modalWindow_Square.module.css'
import { useState, useEffect } from 'react'

const ModalWindow_Square = (props) => {
    const { active, setActive, numberQuestion, isCloseQuestions, setisCloseQuestions } = props;
    const [time, setTime] = useState(120);

    useEffect(() => {
        time > 0 ? setTimeout(() => setTime(time - 1), 1000) : handleSurrender();
    }, [time]);

    const handleSurrender = () => {
        CloseQuestion(false)
        setActive(false)
    }
    const handleAnswers = () => {
        CloseQuestion(true)
        setActive(false)
    }

    const CloseQuestion = (status) => {
        isCloseQuestions[numberQuestion - 1] = status
        setisCloseQuestions(isCloseQuestions)
    }

    return (
        <div className={active ? `${classes.modal_dark} ${classes.active}` : classes.modal_dark}>
            <div className={classes.modal_window_square}>
                <div className={classes.content_question}>
                    some content
                </div>
                <div className={classes.content_answer}>
                    <textarea defaultValue='some text' className={classes.text_answer} />
                    <span className={classes.time}>{time}</span>
                    <div className={classes.content_buttons}>
                        <button className={`${classes.button} ${classes.green}`} onClick={() => handleAnswers()}>Ответить</button>
                        <button className={`${classes.button} ${classes.red}`} onClick={() => handleSurrender()}>Сдаться (-500)</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow_Square;