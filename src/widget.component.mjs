class myCard extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const fetch_data = async (user) => {
            const data = await fetch(`https://api.github.com/users/${user}`, {
                method: "GET",
                headers: {
                    Authorization: {
                        token: 'fd8c6d9dacf9f71f2b9ff2d8131bf66de7f046d0',
                        'Content-Type': 'application/json'
                    },
                }
            });
            const result = await data.json();
            return result;
        };

        /**Create style sheet */
        const stylesheet = document.createElement('style');
        stylesheet.textContent = widgetStyle;

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

    loadFont(url) {
        let head = document.head;
        let font = document.createElement('link');
        font.type = "text/css";
        font.rel = "stylesheet";
        font.href = url;
        head.appendChild(font);
    }


    connectedCallback() {
        this.loadFont('https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;600&family=Roboto&display=swap');
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
    </div>`;
    return markup;
};

const widgetStyle = `
/* resets */
h1, div, p {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto','sans serif';
}
#github-logo{
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
}
.cover{
    height: 120px;
    width: 100%;
    background: #FF5C5C;
    position: absolute;
    left: 0px;
    top: 0px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
/* parimary style*/
.card {
    position: relative;
    display: inline-block;
    background: #ffffff;
    border-radius: 5px;
    box-shadow:  0 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);
    text-align: center;
    padding: 20px 30px;
    padding-top: 5px;
}
.card .fa-github {
    position: absolute;
    color: #646464;
    font-size: 20px;
    top: 10px;
    right: 10px;
}
.card .card-title {
    font-family: 'Baloo Paaji 2', cursive;
    color: #434343;
    margin-bottom: -8px;
    font-size: 30px;
    font-weight: 600;
}
.card .card-username {
    margin-bottom: 20px;
    color: #646464;
}
.card .card-desc {
    width: 250px;
    margin: auto;
    display: block;
    font-weight: 600;
    color: #0000008a;
}
.card .card-img-wrapper {
    position: relative;
    height: 167px;
    width: 171.74px;
    margin: 10px auto;
    margin-bottom: 20px;
}
.card .card-img-wrapper img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
}
.card .card-footer {
    margin-top: 40px;
}
.card .card-footer .footer-box {
    position: relative;
    background: #efefef;
    border-top: 2px solid #ff9b9b;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.26), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    width: 300px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    justify-content: space-around;
}
.card .card-footer .footer-box .box-wrapper {
    position: relative;
}
.card .card-footer .footer-box .box-wrapper .count {
    font-family: 'Baloo Paaji 2', cursive;
    color: #434343;
    font-size: 25px;
    font-weight: 600;
}
.card .card-footer .footer-box .box-wrapper .box-text {
    font-size: 12px;
    font-weight: 600;
    color: #00000085;
    letter-spacing: 0.5px;
}

@media(max-width:400px){
    .card .card-footer .footer-box{
        width: 100%;
    }
}
`

customElements.define('github-card', myCard);