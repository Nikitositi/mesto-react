import logo from './images/logo.svg';


function App() {
  return (
    <div className="page">
      <div className="page__container">
  
        <header className="header">
          <img src={logo} alt="Логотип Место" className="header__logo" />
        </header>
  
        <main className="content">
          <section className="profile">
            <div className="profile__container">
              <img src="<%=require('./images/avatar.jpg')%>" alt="Аватар профиля" className="profile__avatar" />
              <div className="profile__update-avatar"></div>
              <div className="profile__info">
                <div className="profile__wrapper">
                  <h1 className="profile__name">Жак-Ив Кусто</h1>
                  <button className="button button_type_edit" type="button"></button>
                </div>
                <p className="profile__activity">Исследователь океана</p>
              </div>
            </div>
            <button className="button button_type_add" type="button"></button>
          </section>
  
          <section className="photos">
            <ul className="cards">
            </ul>
          </section>
        </main>
  
        <footer className="footer">
          <p className="footer__copyright">© 2022 Mesto Russia</p>
        </footer>
  
        <div className="popup popup_type_edit">
          <div className="popup__container">
            <h3 className="popup__title">Редактировать профиль</h3>
            <form className="popup__form" id="edit-form" name="popup-profile" novalidate>
              <input type="text" className="popup__input popup__input_name" name="name" id="profile-name-input" placeholder="Введите имя" value="" minLength="2" maxLength="40" required />
              <span className="popup__input-error" id="profile-name-input-error"></span>
              <input type="text" className="popup__input popup__input_activity" name="about" id="profile-activity-input" placeholder="Введите вид деятельности" value="" minLength="2" maxLength="200" required />
              <span className="popup__input-error" id="profile-activity-input-error"></span>
              <input type="submit" className="popup__button" name="submit" value="Сохранить" />
            </form>
            <button className="button button_type_close"></button>
          </div>
        </div>
  
        <div className="popup popup_type_add">
          <div className="popup__container">
            <h3 className="popup__title">Новое место</h3>
            <form className="popup__form" id="add-form" name="popup-card" novalidate>
              <input type="text" className="popup__input popup__input_title" name="name" id="card-title-input" placeholder="Название" value="" minLength="2" maxLength="30" required />
              <span className="popup__input-error" id="card-title-input-error"></span>
              <input type="url" className="popup__input popup__input_link" name="link" id="card-link-input" placeholder="Ссылка на картинку" value="" required />
              <span className="popup__input-error" id="card-link-input-error"></span>
              <input type="submit" className="popup__button" name="submit" value="Создать" />
            </form>
            <button className="button button_type_close"></button>
          </div>
        </div>
  
        <div className="popup popup_type_image">
          <div className="popup__wrapper">
            <figure className="popup__figure">
              <img className="popup__image" src="#" alt="" />
              <figcaption className="popup__caption"></figcaption>
            </figure>
            <button className="button button_type_close"></button>
          </div>
        </div>
  
        <div className="popup popup_type_confirm">
          <div className="popup__container">
            <h3 className="popup__title popup__title_type_confirm">Вы уверены?</h3>
            <form className="popup__form" id="confirm-form" name="popup-card" novalidate>
              <input type="submit" className="popup__button popup__button_type_confirm" name="submit" value="Да" />
            </form>
            <button className="button button_type_close"></button>
          </div>
        </div>
  
        <div className="popup popup_type_avatar">
          <div className="popup__container">
            <h3 className="popup__title">Обновить аватар</h3>
            <form className="popup__form" id="avatar-form" name="popup-avatar" novalidate>
              <input type="url" className="popup__input popup__input_link" name="avatarlink" id="avatar-link-input" placeholder="Ссылка на картинку" value="" required />
              <span className="popup__input-error" id="avatar-link-input-error"></span>
              <input type="submit" className="popup__button" name="submit" value="Сохранить" />
            </form>
            <button className="button button_type_close"></button>
          </div>
        </div>
  
        <template id="card-template">
          <li className="cards__item">
            <img className="cards__image" src="#" alt="" />
            <button className="button button_type_delete"></button>
            <div className="cards__wrapper">
              <p className="cards__title"></p>
              <div className="cards__container">
                <button className="button button_type_like"></button>
              <span className="cards__like-counter"></span>
              </div>
            </div>
          </li>
        </template>
  
      </div>
    </div>
  );
}

export default App;
