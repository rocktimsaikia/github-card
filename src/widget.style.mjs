export const widget_style = `
:host {
    --bg-color: #ffffff;
    --title-color: #434343;
    --resname-color: #646464;
    --desc-color: rgba(0, 0, 0, 0.54);
    --footer-color: rgba(0, 0, 0, 0.52);
    --box-color: #EFEFEF;
}
[data-theme="dark"] {
    --bg-color: #23262c;
    --title-color: #e2e2e2;
    --resname-color: #9b9b9b;
    --desc-color: rgba(255, 255, 255, 0.54);
    --footer-color: rgba(255, 255, 255, 0.52);
    --box-color: #303237;
}
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
    fill: var(--title-color);
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
.card {
    position: relative;
    display: inline-block;
    box-shadow:  0 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);
    text-align: center;
    transition: all 0.5s;
}
.card .card-outer{
    border-radius: 5px;
    background: var(--bg-color);
    padding: 20px 30px;
    padding-top: 5px;
}
.card .card-title {
    font-family: 'Baloo Paaji 2', cursive;
    color: var(--title-color);
    margin-bottom: -8px;
    font-size: 30px;
    font-weight: 600;
}
.card .card-resname {
    margin-bottom: 20px;
    color: var(--resname-color);
}
.card .card-desc {
    width: 250px;
    margin: auto;
    display: block;
    font-weight: 600;
    color: var(--desc-color);
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
    background: var(--box-color);
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
    color: var(--title-color);
    font-size: 25px;
    font-weight: 600;
}
.card .card-footer .footer-box .box-wrapper .box-text {
    font-size: 12px;
    font-weight: 600;
    color: var(--footer-color);
    letter-spacing: 0.5px;
}

@media(max-width:400px){
    .card .card-footer .footer-box{
        width: 100%;
    }
}
`;
