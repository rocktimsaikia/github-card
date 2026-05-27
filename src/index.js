import escapeHtml from './escape.js';
import nFormatter from './format.js';
import widgetStyle from './style.js';
import safeUrl from './url.js';

// Inline monochrome icons (Material Symbols) for the profile meta row.
const ICON_LOCATION =
	'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>';
const ICON_COMPANY =
	'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>';
const ICON_LINK =
	'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>';

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
		const bioHtml = user.bio
			? `<p class="card-desc">${escapeHtml(user.bio)}</p>`
			: '';

		const meta = [];
		if (user.location) {
			meta.push(
				`<span class="meta-item">${ICON_LOCATION}${escapeHtml(user.location)}</span>`,
			);
		}
		if (user.company) {
			meta.push(
				`<span class="meta-item">${ICON_COMPANY}${escapeHtml(user.company)}</span>`,
			);
		}
		const blog = safeUrl(user.blog);
		if (blog) {
			const label = escapeHtml(String(user.blog).replace(/^https?:\/\//i, ''));
			meta.push(
				`<a class="meta-item meta-link" href="${escapeHtml(blog)}" target="_blank" rel="noopener">${ICON_LINK}${label}</a>`,
			);
		}
		const metaHtml = meta.length
			? `<div class="card-meta">${meta.join('')}</div>`
			: '';

		return `
		<div class="cover"></div>
		<div class="card-wrapper">
		<a href="https://github.com/${login}" target="_blank" rel="noopener"><img id="github-logo" src="https://i.ibb.co/frv5pB3/github-logo.png" alt="github-logo" border="0"></a>
		<div class="card-header">
		<div class="card-img-wrapper"><img src="https://avatars.githubusercontent.com/${login}" alt="${name}"/></div>
		<h1><a class="card-title" href="${htmlUrl}" target="_blank" rel="noopener">${name}</a></h1>
		<div class="card-responsename"><a href="${htmlUrl}" target="_blank" rel="noopener">@${login}</a></div>
		${bioHtml}
		${metaHtml}
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
