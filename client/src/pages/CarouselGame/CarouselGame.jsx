import './carouselgame.css'

import questionData from './Questions_Carousel.json'
import InputComponent from '../../components/Input/Input'
import CarouselBlockPoint from '../../components/CarouselBlockPoints/CarouselBlockPoints'
import GameInformationPanel from '../../components/GameInformationPanel/GameInformationPanel'

/* import axios from 'axios' */
import { useEffect, useState } from 'react'

const CarouselGame = () => {
    /* const [carouselData, setCarouselData] = useState()

    useEffect(() => {
        const apiUrl = ''
        axios.get(apiUrl).then((resp) => {
            const allData = resp.data
            console.log(allData)
            setCarouselData(allData)
        })
    }, [setCarouselData])
 */
    const { scoreFirstQuestion, scoreSuccess, scoreFailure, questions, currentScore = 10 } = questionData
    const [idx, setIdx] = useState(0) //индекс вопроса
    const [scoreCurrent, setScoreCurrent] = useState(currentScore) //текущий балл
    const [scorePrev, setscorePrev] = useState(null) //предыдущий балл
    const [value, setValue] = useState('') //значение введенное пользователем
    const [question, setQuestion] = useState(questions[idx].question) //текущий вопрос
    const [isCorrect, setIsCorrect] = useState() //состояние ответа
    const [isAnimating, setIsAnimating] = useState(false) // состояние для анимации


    useEffect(() => {
        if (idx === 0) {
            return // выходим из useEffect, чтобы не запускать анимацию
        }
        setIsAnimating(true)
        setTimeout(() => {
            setIsAnimating(false)
        }, 500) // Задержка анимации
        if (idx !== questions.length) {
            setQuestion(questions[idx].question) //обновляем текущий вопрос
        } else {
            setQuestion('Тест окончен')
        }
    }, [idx, questions])

    const handleSubmit = () => {
        if (idx === questions.length) { //проверка выхода за кол-во вопросов
            return
        }
        setIdx(idx + 1) //переход на следующее поле
        questions[idx].answer === value ? setIsCorrect(true) : setIsCorrect(false) //обновляем состояние ответа
        setTimeout(() => {
            //обновляем текущего балла
            questions[idx].answer === value ?
                setScoreCurrent(scoreCurrent + scoreSuccess) :
                setScoreCurrent(scoreCurrent - scoreFailure < scoreFirstQuestion ? scoreFirstQuestion : scoreCurrent - scoreFailure)
            //обновляем предыдущий балл
            setscorePrev(scoreCurrent)
        }, 500)
        setValue('') //сброс поля ввода        
    }

    return (
        <main className="section">
            <div className="container">
                <div className="carousel-game">
                    {/* <GameInformationPanel /> */}
                    <div className="carousel-wrapper-points">
                        <CarouselBlockPoint className={scorePrev === null ? 'hidden' : isAnimating ? 'hidden' : isCorrect ? 'correct' : 'incorrect'} points={scorePrev} />
                        <CarouselBlockPoint className={(isAnimating ? `${isCorrect ? 'correct' : 'incorrect'} animate-next-point` : '')} points={scoreCurrent} />
                        <div className={'carousel-next-point ' + (isAnimating ? 'hidden' : '')}>
                            <CarouselBlockPoint className={'correct'} points={scoreCurrent + scoreSuccess} />
                            <CarouselBlockPoint className={'incorrect'} points={scoreCurrent - scoreFailure < scoreFirstQuestion ? scoreFirstQuestion : scoreCurrent - scoreFailure} />
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
    )
}

export default CarouselGame