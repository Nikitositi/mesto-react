import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    link: "",
  });

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({
      name: "",
      link: "",
    });
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="popup__input popup__input_name"
            name="name"
            id="profile-name-input"
            placeholder="Введите имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span
            className="popup__input-error"
            id="profile-name-input-error"
          ></span>
          <input
            type="text"
            className="popup__input popup__input_activity"
            name="about"
            id="profile-activity-input"
            placeholder="Введите вид деятельности"
            minLength="2"
            maxLength="200"
            required
          />
          <span
            className="popup__input-error"
            id="profile-activity-input-error"
          ></span>
        </PopupWithForm>

        <PopupWithForm
          name="add"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="popup__input popup__input_title"
            name="name"
            id="card-title-input"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span
            className="popup__input-error"
            id="card-title-input-error"
          ></span>
          <input
            type="url"
            className="popup__input popup__input_link"
            name="link"
            id="card-link-input"
            placeholder="Ссылка на картинку"
            required
          />
          <span
            className="popup__input-error"
            id="card-link-input-error"
          ></span>
        </PopupWithForm>

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            className="popup__input popup__input_link"
            name="avatarlink"
            id="avatar-link-input"
            placeholder="Ссылка на картинку"
            required
          />
          <span
            className="popup__input-error"
            id="avatar-link-input-error"
          ></span>
        </PopupWithForm>

        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          isOpen=""
          onClose={closeAllPopups}
        ></PopupWithForm>

        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
        />
      </div>
    </div>
  );
}

export default App;
