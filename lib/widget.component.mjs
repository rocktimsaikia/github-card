/* eslint no-undef: 0 */
import widgetStyle from './widget.style.mjs';

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

  get observedAttribute() {
    return ['data-theme'];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'data-theme' && oldValue !== newValue && newValue !== '') {
      this[attr] = newValue;
    }
  }

  connectedCallback() {
    this.fetchData(this.getAttribute('data-user')).then((response) => {
      const cardTemplate = this.createCard(response);
      this._shadowRoot.querySelector('.card').innerHTML = cardTemplate;
    });

    if (this.getAttribute('data-theme')) {
      const theme = this.getAttribute('data-theme');
      this.setTheme(theme);
    }
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
    return `
        <div class="cover"></div>
        <div class="card-wrapper">
        <a href="https://github.com/${user.login}" target="_blank" rel="noopener"><img id="github-logo" src="https://i.ibb.co/frv5pB3/github-logo.png" alt="github-logo" border="0"></a>
        <div class="card-header">
        <div class="card-img-wrapper"><img src="https://avatars.githubusercontent.com/${user.login}"/></div>
        <h1><a class="card-title" href="${user.html_url}" target="_blank" rel="noopener">${user.name}</a></h1>
        <div class="card-responsename"><a href="${user.html_url}" target="_blank" rel="noopener">@${user.login} 🎉</a></div>
        <p class="card-desc">${user.bio ?? ''}</p>
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
}

customElements.define('github-card', myCard);
