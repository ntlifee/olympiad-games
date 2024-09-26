import './gameinformationpanel.css'

const GameInformationPanel = () => {
    return ( 
        <nav className="information_panel">
            <div className="score">
                Очки: 261
            </div>
            <div className="time">
                00:00:00
            </div>
        </nav>
     );
}
 
export default GameInformationPanel;