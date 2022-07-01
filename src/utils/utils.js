export function rendering(button, isLoading) {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранить";
  }
}

// Buttons
export const buttonEdit = document.querySelector(".button_type_edit");
export const buttonAdd = document.querySelector(".button_type_add");

// Form
export const formProfilePopup = document.querySelector(
  '[name="popup-profile"]'
);
export const formCardPopup = document.querySelector('[name="popup-card"]');
export const formAvatarPopup = document.querySelector(".popup_type_avatar");
export const profileNameInput = document.querySelector(".popup__input_name");
export const profileActivityInput = document.querySelector(
  ".popup__input_activity"
);

// Cards-container
export const cardsContainer = document.querySelector(".cards");

// Конфигурация для формы
export const configValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};
