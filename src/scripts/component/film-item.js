class FilmItem extends HTMLElement {
    set film(film) {
      this._film = film;
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <img class="fan-art-film" src="${this._film.Poster}" alt="Gambar film">
      <div class="film-info">
        <h2 class="fw-bold">${this._film.Title}</h2>
        <h4>Jenis Film : ${this._film.Type}</h4>
        <h4>Tahun ${this._film.Year}</h4>
      </div>
        `;
    }
  }
  
  customElements.define('film-item', FilmItem);