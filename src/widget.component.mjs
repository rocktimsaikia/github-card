import { widget_style } from "./widget.style.mjs";

class myCard extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

    };

    get observedAttribute() {
        return ["data-theme"];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (attr == 'data-theme' && oldValue !== newValue && newValue !== '') {
            this[attr] = newValue;
        }
    };

    connectedCallback() {
        const font_uri = 'https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;600&family=Roboto&display=swap'
        this.font_Loader(font_uri);

        this.fetch_data(this.getAttribute('data-user')).then(res => {
            const card_template = this.create_card(res);
            this._shadowRoot.querySelector('.card').innerHTML = card_template;
        });

        if (this.getAttribute('data-theme')) {
            const theme = this.getAttribute('data-theme');
            this.setTheme(theme);
        }
    };

    setTheme(theme) {

        switch (theme) {
            case 'dark':
                this._shadowRoot.querySelector('.card').classList.add('dark');
                break;
            default:
                this._shadowRoot.querySelector('.card').classList.remove('dark');
                break;
        }

    }


    /** fetch the data */
    async fetch_data(res) {
        const data = await fetch(`https://api.github.com/users/${res}`, {
            method: "GET"
        });
        const result = await data.json();
        return result;
    };

    /** loads the fonts */
    font_Loader(url) {
        const font_link = document.createElement('link');
        font_link.setAttribute('type', 'text/css');
        font_link.setAttribute('rel', 'stylesheet');
        font_link.setAttribute('href', url)
        document.head.appendChild(font_link);
    };

    create_card(user) {
        return `
        <div class="cover"></div>
        <div class="card-wrapper">
        <a href="https://github.com/RocktimSaikia/github-card" target="_blank" rel="noopener"><img id="github-logo" src="https://i.ibb.co/frv5pB3/github-logo.png" alt="github-logo" border="0"></a>
        <div class="card-header">
        <div class="card-img-wrapper"><img src="https://avatars.githubusercontent.com/${user.login}"/></div>
        <h1><a class="card-title" href="${user.html_url}" target="_blank" rel="noopener">${user.name}</a></h1>
        <div class="card-resname"><a href="${user.html_url}" target="_blank" rel="noopener">@${user.login} 🎉</a></div>
        <p class="card-desc">${user.bio}</p>
        <div class="card-footer">
        <div class="footer-box">
            <div class="box-wrapper">
                <div class="count">${user.followers}</div>
                <div class="box-text">Followers</div>
            </div>   
            <div class="box-wrapper">
                <div class="count">${user.following}</div>
                <div class="box-text">Following</div>
            </div>  
            <div class="box-wrapper">
                <div class="count">${user.public_repos}</div>
                <div class="box-text">Repositories</div>
            </div>
        </div>
        </div>
        `;
    }
};

const template = document.createElement('template');


template.innerHTML = `
    <style>
        ${widget_style}
    </style>
    <div class="card"></div>
`

customElements.define('github-card', myCard);