import './carouselgame.css'

import questionData from './Questions_Carousel.json'
import InputComponent from '../../components/Input/Input';
import CarouselBlockPoint from '../../components/CarouselBlockPoints/CarouselBlockPoints';
import GameInformationPanel from '../../components/GameInformationPanel/GameInformationPanel';

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
    const [isCorrect, setIsCorrect] = useState('') //текущий вопрос

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

        setIsCorrect(questions[idx].answer === value) //проверяем ответ
        setValue('') //сброс поля ввода
        setIdx(idx + 1) //переход на следующее поле
    };

    return (
        <main className="section">
            <div className="container">
                <div className="carousel-game">
                    {/* <GameInformationPanel /> */}
                    <div className="carousel-wrapper-points">
                        <CarouselBlockPoint className={isCorrect ? 'correct' : 'incorrect'} points={666} />
                        <CarouselBlockPoint className={'current'} points={666} />
                        <div className='carousel-next-point'>
                            <CarouselBlockPoint points={666} />
                            <CarouselBlockPoint points={666} />
                        </div>                        
                    </div>
                    <div className="carousel-wrapper-question">
                        <label className="carousel-label" htmlFor="input-answer">{question}</label>
                        <InputComponent inputValue={value} action={setValue} inputId={"input-answer"} placeholder={"Введите ответ!"} />
                        <button onClick={handleSubmit} className="carousel-button-answer">Следующий вопрос</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CarouselGame;