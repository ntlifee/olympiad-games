import './carouselgame.css'

import questionData from './Questions_Carousel.json'
import InputComponent from '../../components/Input/Input';
import CarouselTable from '../../components/CarouselTable/CarouselTable'

/* import axios from 'axios' */
import { useEffect, useState } from 'react';

const CarouselGame = () => {
    /* const [carouselData, setCarouselData] = useState();

    useEffect(() => {
        const apiUrl = '';
        axios.get(apiUrl).then((resp) => {
            const allData = resp.data;
            console.log(allData)
            setCarouselData(allData);
        });
    }, [setCarouselData]);
 */
    const { scoreFirstQuestion, scoreSuccess, scoreFailure, questions } = questionData;
    const [idx, setIdx] = useState(0) //индекс вопроса
    const [value, setValue] = useState('') //значение введенное пользователем
    const [question, setQuestion] = useState('') //текущий вопрос
    const [answeredStatus, setAnsweredStatus] = useState(Array(questions.length).fill(null)); //массив статуса строк
    const [scores, setScores] = useState([scoreFirstQuestion, ...Array(questions.length - 1).fill(null)]); // первая ячейка с баллом, остальные пустые

    useEffect(() => {
        if (idx !== questions.length) {
            setQuestion(questions[idx].question)
        } else {
            setQuestion('Тест окончен')
        }
    }, [idx, questions]);

    const handleSubmit = () => {
        if (idx === questions.length) {
            return
        }
        const isCorrect = questions[idx].answer === value; //проверяем ответ
        const updatedStatus = [...answeredStatus]; // копируем массив статусов
        updatedStatus[idx] = isCorrect ? 'correct' : 'incorrect'; // обновляем статус текущего вопроса

        const updatedScores = [...scores]; // копируем массив баллов
        if (isCorrect) {
            updatedScores[idx + 1] = updatedScores[idx] + scoreSuccess; // добавляем scoreSuccess
        } else {
            updatedScores[idx + 1] = Math.max(scoreFirstQuestion, updatedScores[idx] - scoreFailure); // вычитаем scoreFailure, но не меньше scoreFirstQuestion
        }

        setAnsweredStatus(updatedStatus); // обновляем статус строк
        setScores(updatedScores); // обновляем баллы
        setValue('') //сброс поля ввода
        setIdx(idx + 1) //переход на следующее поле
    };

    return (
        <main className="section">
            <div className="container">
                <div className="carousel-game">
                    <CarouselTable
                        answeredStatus={answeredStatus}
                        scores={scores}
                    />
                    <div className="carousel-wrapper-question">
                        <label className="carousel-label" htmlFor="input-answer">{question}</label>
                        <div className="carousel-form-answer">
                            <InputComponent inputValue={value} action={setValue} inputId={"input-answer"} placeholder={"Введите ответ!"} />
                            <button onClick={handleSubmit} className="carousel-button-form-answer">Следующий вопрос</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CarouselGame;