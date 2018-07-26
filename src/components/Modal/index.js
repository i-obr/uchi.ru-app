import React from 'react';
import './Modal.css';

export default ({ isOpen, children, onHide }) => {
  const isOpenModal = isOpen ? 'modal--is-open' : '';
  return (
    <div className={`modal ${ isOpenModal }`}>
      <button className="modal__close" onClick={ onHide }>Закрыть</button>
      <div className="modal__content">
        { children }
      </div>
    </div>
  );
}
