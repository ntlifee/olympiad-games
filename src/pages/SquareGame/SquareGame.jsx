import GameInformationPanel from './../../components/GameInformationPanel/GameInformationPanel'
import './squaregame.css'

const SquareGame = () => {
    return (
        <main className="section">               
            <div className="container">
                <div className="wrapper">
                    <GameInformationPanel/>
                </div>
            </div>
        </main>
    );
}
 
export default SquareGame;