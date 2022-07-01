class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  // Проверка ответа от сервера
  _checkResponseStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getData(additive) {
    return fetch(this._url + additive, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponseStatus);
  }

  patchProfile(data) {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._checkResponseStatus);
  }

  addNewCard(data) {
    return fetch(this._url + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkResponseStatus);
  }
  deleteCard(id) {
    return fetch(this._url + "/cards/" + id, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponseStatus);
  }

  handleCard(id, action) {
    if (action === true) {
      this._method = "PUT";
    } else {
      this._method = "DELETE";
    }
    console.log("/cards/likes/" + id);
    return fetch(this._url + "/cards/likes/" + id, {
      method: this._method,
      headers: this._headers,
    }).then(this._checkResponseStatus);
  }

  updateAvatar(data) {
    return fetch(this._url + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatarlink,
      }),
    }).then(this._checkResponseStatus);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-43",
  headers: {
    authorization: "aac17baf-7cf9-4e4a-9ab3-7682aecd0de7",
    "Content-Type": "application/json",
  },
});

export default api;
