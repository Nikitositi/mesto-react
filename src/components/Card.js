function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="cards__item">
      <img
        className="cards__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleCardClick}
      />
      <button className="button button_type_delete"></button>
      <div className="cards__wrapper">
        <p className="cards__title">{props.card.name}</p>
        <div className="cards__container">
          <button className="button button_type_like"></button>
          <span className="cards__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
