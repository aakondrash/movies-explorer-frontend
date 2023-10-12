import cross from '../../images/cross.svg';
import tick from '../../images/tick.svg';

const Popup = ({ isSucceeded, isOpened, onClose, message }) => {
  return (
    <div className={`popup ${isOpened ? 'popup_opened' : ''}`} >
        <div className="popup__container popup__tooltip">
            <img className="popup__image"
                  src={isSucceeded ? tick : cross}
                  alt={isSucceeded ? 'Успех' : 'Нет успеха'}
            />
            <h2 className="popup__title">
              {message}
            </h2>
            <button type="button"
                    className="popup__close-button"
                    onClick={onClose}></button>
        </div>
    </div>
  );
};

export default Popup;