import './film-item.js';

class FilmList extends HTMLElement {
  set films(films) {
    this._films = films;
    this.render();
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.innerHTML = '';
    this._films.forEach((film) => {
      const filmItemElement = document.createElement('film-item');
      filmItemElement.film = film;

      this.appendChild(filmItemElement);
    });
  }
}

customElements.define('film-list', FilmList);