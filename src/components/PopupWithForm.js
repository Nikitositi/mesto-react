import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ''}`}>
      <div className="popup__container">
        <h3 className="popup__title">{props.title}</h3>
        <form
          className="popup__form"
          id="edit-form"
          name={props.name}
          noValidate
        >
          {props.children}
          <input
            type="submit"
            className="popup__button"
            name="submit"
            value="Сохранить"
          />
        </form>
        <button className="button button_type_close" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm