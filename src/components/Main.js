import React, { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getData("/users/me")
      .then((userData) => {
        setUserName(userData);
        setUserAvatar(userData);
        setUserDescription(userData);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getData("/cards")
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img
            src={userAvatar.avatar}
            alt="Аватар профиля"
            className="profile__avatar"
          />
          <div
            className="profile__update-avatar"
            onClick={props.onEditAvatar}
          ></div>
          <div className="profile__info">
            <div className="profile__wrapper">
              <h1 className="profile__name">{userName.name}</h1>
              <button
                className="button button_type_edit"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__activity">{userDescription.about}</p>
          </div>
        </div>
        <button
          className="button button_type_add"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="photos">
        <ul className="cards">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
