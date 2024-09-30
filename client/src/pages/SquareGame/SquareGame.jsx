import GameInformationPanel from './../../components/GameInformationPanel/GameInformationPanel'
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
                                {levels.map(level => (<th key={level}>Уровень {level}</th>))}
                                <th>Бонус</th>
                            </tr>
                        </thead>
                        <tbody>
                            {themes.map((theme, i) => (
                                <tr key={i}>
                                    <td>Тема {theme}</td>
                                    {levels.map(level => (
                                        <td key={level}>
                                            {/* Компонент элемента управления вопросом */}
                                        </td>
                                    ))}
                                    <td className="bonus">{(i + 1) * 10} баллов</td>
                                </tr>
                            ))}
                            <tr>
                                <td>Бонус</td>
                                {levels.map(level => (<td key={level}>{level * 10} баллов</td>))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default SquareGame;