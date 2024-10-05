import { useState } from 'react'
import GameInformationPanel from './../../components/GameInformationPanel/GameInformationPanel'
import QuestionButton from '../../components/QuestionButton/QuestionButton'
import ModalWindow_Square from '../../components/ModalWindow_Square/ModalWindow_Square'
import classes from './squaregame.module.css'

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
                <div className={classes.wrapper}>
                    <GameInformationPanel />
                    <table className={classes.table_square}>
                        <ModalWindow_Square active={modalActive} setActive={setModalActive} />
                        <thead>
                            <tr className={classes.tr_square}>
                                <th className={classes.th_square}>Тема</th>
                                {levels.map(level => (<td className={classes.td_square} key={level}>Уровень {level}</td>))}
                                <th className={classes.th_square}>Бонус</th>
                            </tr>
                        </thead>
                        <tbody>
                            {themes.map((theme, i) => (
                                <tr key={i} className={classes.tr_square}>
                                    <td className={`${classes.theme} ${classes.td_square}`}><span className={classes.theme_text}>Тема {theme} orghsofhe8fhsog8ufsgohysepofyes98fywsfsiwdwadwadufg</span></td>
                                    {levels.map(level => (
                                        <QuestionButton key={level} setModalActive={setModalActive} />
                                    ))}
                                    <td className={`${classes.bonus} ${classes.td_square}`}>+{(i + 1) * 10}</td>
                                </tr>
                            ))}
                            <tr className={classes.tr_square}>
                                <th className={classes.th_square}>Бонус</th>
                                {levels.map(level => (<td className={classes.td_square} key={level}>+{level * 10}</td>))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default SquareGame;