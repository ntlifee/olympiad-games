import './modalWindow_Square.css'

const ModalWindow_Square = (props) => {
    const { active, setActive } = props;
    return (
        <div className={active ? 'modal_dark active' : 'modal_dark'}>
            <div className="modal_window_square">
                <div className="modal_window_square_content">
                    <button onClick={() => setActive(false)}>Сдаться</button>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow_Square;