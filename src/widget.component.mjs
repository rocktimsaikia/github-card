import { widget_style } from "./widget.style.mjs";

class myCard extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const font_uri = "https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;600&family=Roboto&display=swap";
    this.font_Loader(font_uri);

    this.fetch_data(this.getAttribute("data-user")).then((res) => {
      const card_template = this.create_card(res);
      this._shadowRoot.querySelector(".card").innerHTML = card_template;
      this._shadowRoot.querySelector(".card").setAttribute("data-theme", this.getAttribute("data-theme"));
    });
  }

  /** fetch the data */
  async fetch_data(res) {
    const data = await fetch(`https://api.github.com/users/${res}`, {
      method: "GET",
    });
    const result = await data.json();
    return result;
  }

  /** loads the fonts */
  font_Loader(url) {
    const font_link = document.createElement("link");
    font_link.setAttribute("type", "text/css");
    font_link.setAttribute("rel", "stylesheet");
    font_link.setAttribute("href", url);
    document.head.appendChild(font_link);
  }

//   <a href="${user.html_url}" target="_blank" rel="noopener"><img id="github-logo" src="https://i.ibb.co/frv5pB3/github-logo.png" alt="github-logo" border="0"></a>
  create_card(user) {
    return `
        <div class="card-outer">
        <div class="cover"></div>
        <div class="card-wrapper">
        <a href="${user.html_url}" target="_blank" rel="noopener">
            <svg id="github-logo" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>github-logo</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
        <div class="card-header">
        <div class="card-img-wrapper"><img src="https://avatars.githubusercontent.com/${user.login}"/></div>
        <h1 class="card-title">${user.name}</h1>
        <div class="card-resname">@${user.login}</div>
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
        </div>
        `;
  }
}

const template = document.createElement("template");
template.innerHTML = `
    <style>
        ${widget_style}
    </style>
    <div class="card">
        <img src="https://i.ibb.co/KDkTD3n/Ellipsis-1s-200px.gif" alt="Ellipsis-1s-200px" border="0">
    </div>
`;

customElements.define("github-card", myCard);
