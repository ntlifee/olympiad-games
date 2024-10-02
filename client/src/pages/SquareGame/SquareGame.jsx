import { useState } from 'react'
import GameInformationPanel from './../../components/GameInformationPanel/GameInformationPanel'
import QuestionButton from '../../components/QuestionButton/QuestionButton'
import ModalWindow_Square from '../../components/ModalWindow_Square/ModalWindow_Square'
import './squaregame.css'

const SquareGame = (props) => {
    let { levels, themes } = props
    const [modalActive, setModalActive] = useState(false)
    //#region development
    levels = [];
    for (let i = 1; i <= 5; i++) {
        levels.push(i);
    }
    themes = [];
    for (let i = 1; i <= 5; i++) {
        themes.push(i);
    }
    //#endregion
    return (
        <main className="section">
            <div className="container">
                <div className="wrapper">
                    <GameInformationPanel />
                    <table>
                        <ModalWindow_Square active={modalActive} setActive={setModalActive} />
                        <thead>
                            <tr>
                                <th>Тема</th>
                                {levels.map(level => (<td key={level}>Уровень {level}</td>))}
                                <th>Бонус</th>
                            </tr>
                        </thead>
                        <tbody>
                            {themes.map((theme, i) => (
                                <tr key={i}>
                                    <td className='theme'>Тема {theme}</td>
                                    {levels.map(level => (
                                        <td key={level}>
                                            <QuestionButton setModalActive={setModalActive} />
                                        </td>
                                    ))}
                                    <td className="bonus">+{(i + 1) * 10}</td>
                                </tr>
                            ))}
                            <tr>
                                <th>Бонус</th>
                                {levels.map(level => (<td key={level}>+{level * 10}</td>))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default SquareGame;