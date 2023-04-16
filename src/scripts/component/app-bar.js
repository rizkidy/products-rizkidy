class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar bg-dark">
            <div class="container-fluid ">
                <a class="navbar-brand fw-bold" style="color:white">
                <img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-r-letter-logo-png-image_4112929.jpg" class="me-2" width="50px" height="46px">Rizkidy Films
                </a>
            </div>
        </nav>
        `;
    }
}

customElements.define('app-bar', AppBar);