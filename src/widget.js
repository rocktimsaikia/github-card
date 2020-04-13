class myCard extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const fetch_data = async (user) => {
            const data = await fetch(`https://api.github.com/users/${user}`);
            const result = await data.json();
            return result;
        };

        /**Create style sheet */
        const stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', './src/widget.css');


        /**Create element */
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'card-wrapper');

        /**Card container */
        const card = document.createElement('div');
        fetch_data(this.getAttribute('data-user')).then(res => {
            card.innerHTML = template(res);
        });


        shadow.appendChild(stylesheet);
        shadow.appendChild(wrapper);
        wrapper.appendChild(card);
    };



    connectedCallback() {
        let Baloo = new FontFace('Baloo Paaji 2', 'url(./src/fonts/baloo/BalooPaaji2-Regular.ttf)');
        let Baloo_bold = new FontFace('Baloo Paaji 2', 'url(./src/fonts/baloo/BalooPaaji2-Bold.ttf)');
        let Roboto = new FontFace('Roboto', 'url(./src/fonts/roboto/Roboto-Regular.ttf)');

        Baloo.load().then(loaded_face => {
            document.fonts.add(loaded_face);
        });
        Baloo_bold.load().then(loaded_face => {
            document.fonts.add(loaded_face);
        });
        Roboto.load().then(loaded_face => {
            document.fonts.add(loaded_face);
        });
    };
};

const template = (user) => {
    const markup = `
    <div class="card">
    <div class="cover"></div>
        <a href="${user.html_url}" target="_blank" rel="noopener"><img id="github-logo" src="https://i.ibb.co/frv5pB3/github-logo.png" alt="github-logo" border="0"></a>
        <div class="card-header">
        <div class="card-img-wrapper"><img src="https://avatars.githubusercontent.com/${user.login}"/></div>
        <h1 class="card-title">${user.name}</h1>
        <div class="card-username">@${user.login}</div>
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
    return markup;
};

customElements.define('github-card', myCard);