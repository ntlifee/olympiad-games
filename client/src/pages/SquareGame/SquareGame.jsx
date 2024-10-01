import GameInformationPanel from './../../components/GameInformationPanel/GameInformationPanel'
import QuestionButton from '../../components/QuestionButton/QuestionButton'
import './squaregame.css'

const SquareGame = (props) => {
    let { levels, themes } = props
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
                                            <QuestionButton />
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