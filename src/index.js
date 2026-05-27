import escapeHtml from './escape.js';
import nFormatter from './format.js';
import widgetStyle from './style.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
        ${widgetStyle}
    </style>
    <div class="card"></div>
`;

class myCard extends HTMLElement {
	constructor() {
		super();

		this._shadowRoot = this.attachShadow({ mode: 'open' });
		this._shadowRoot.append(template.content.cloneNode(true));
	}

	static get observedAttributes() {
		return ['data-theme'];
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		if (attr === 'data-theme' && oldValue !== newValue) {
			this.setTheme(newValue);
		}
	}

	connectedCallback() {
		this.fetchData(this.getAttribute('data-user')).then((response) => {
			const cardTemplate = this.createCard(response);
			this._shadowRoot.querySelector('.card').innerHTML = cardTemplate;
		});
	}

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

	/** Fetch the data */
	async fetchData(response) {
		const data = await fetch(`https://api.github.com/users/${response}`, {
			method: 'GET',
		});
		const responseult = await data.json();
		return responseult;
	}

	createCard(user) {
		const login = escapeHtml(user.login);
		const htmlUrl = escapeHtml(user.html_url);
		const name = escapeHtml(user.name);
		const bio = escapeHtml(user.bio ?? '');
		return `
        <div class="cover"></div>
        <div class="card-wrapper">
        <a href="https://github.com/${login}" target="_blank" rel="noopener"><img id="github-logo" src="https://i.ibb.co/frv5pB3/github-logo.png" alt="github-logo" border="0"></a>
        <div class="card-header">
        <div class="card-img-wrapper"><img src="https://avatars.githubusercontent.com/${login}" alt="${name}"/></div>
        <h1><a class="card-title" href="${htmlUrl}" target="_blank" rel="noopener">${name}</a></h1>
        <div class="card-responsename"><a href="${htmlUrl}" target="_blank" rel="noopener">@${login}</a></div>
        <p class="card-desc">${bio}</p>
        <div class="card-footer">
        <div class="footer-box">
            <div class="box-wrapper">
                <div class="count">${nFormatter(user.followers)}</div>
                <div class="box-text">Followers</div>
            </div>
            <div class="box-wrapper">
                <div class="count">${nFormatter(user.following)}</div>
                <div class="box-text">Following</div>
            </div>
            <div class="box-wrapper">
                <div class="count">${nFormatter(user.public_repos)}</div>
                <div class="box-text">Repositories</div>
            </div>
        </div>
        </div>
        </div>
        </div>
        `;
	}
}

customElements.define('github-card', myCard);
