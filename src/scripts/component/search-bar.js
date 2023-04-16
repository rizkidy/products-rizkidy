class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#searchElement').value;
    }

    render() {
        this.innerHTML = `
        <style>
        .search-container {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
            padding: 16px;
            border-radius: 5px;
            margin: 2rem auto;
            position: sticky;
            top: 10px;
            background-color: white;
          }
          
          .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.7);
            font-weight: bold;
            font-size: medium;
          }
          
          .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid rgba(0, 0, 0, 0.7);
          }
          
          .search-container > input:focus::placeholder {
            font-weight: bold;
          }
          
          .search-container > input::placeholder {
            color: rgba(0, 0, 0, 0.7);
            font-weight: bold;
          }
      
          .search-container > button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: rgba(0, 0, 0, 0.7);
                color: white;
                border-radius: 10px;
                text-transform: uppercase;
            }
      
            @media screen and (max-width: 550px) {
                .search-container {
                flex-direction: column;
                position: static;
                }
            
                .search-container > input {
                width: 100%;
                margin-bottom: 12px;
                }
            
                .search-container > button {
                width: 100%;
                }
            }
      </style>

          <div id="search-container" class="d-flex align-content-center search-container">
            <input placeholder="Search Film" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
          </div>
        `;

        this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);