import './carouselgame.css'

const CarouselGame = () => {
    return (
        <main className="section">
            <div className="container">
                <div class="carousel-info-window">
                    <div class="carousel-wrapper-score">
                        <p>Баллы:</p>
                        <p class="carousel-count-value" id="carousel-count-point">0</p>
                    </div>
                    <div class="carousel-wrapper-time" id="carousel-timer">00:00:00</div>
                </div>
                <div class="carousel-game">
                    {/* <div class="carousel-gameover" id="carousel-gameover">Игра окончена!</div> */}
                    <div class="carousel-wrapper-progress-table">
                        <table id="carousel-progress-table">
                            <tbody>
                                <tr>
                                    <th>№</th>
                                    <th>Цена</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="carousel-wrapper-windows-question">
                        <div class="carousel-wrapper-question">
                            <label id="carousel-label-question" for="input-answer">Вопрос?</label>
                            <form class="carousel-form-answer">
                                <input id="carousel-input-answer" name="carousel-input-answer" placeholder="Введите ответ!" />
                                <button type="button" id="carousel-button-form-answer" class="carousel-button-form-answer">Следующий вопрос</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CarouselGame;