export const widget_style = `
h1, div, p {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto','sans serif';
}
a{
    text-decoration: none;
    color: inherit;
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

.card {
    position: relative;
    display: inline-block;
    background: #ffffff;
    border-radius: 5px;
    box-shadow:  0 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);
    text-align: center;
    padding: 20px 30px;
    padding-top: 5px;
    transition: all 0.5s;
}

/* Dark Theme */
.card.dark{
    background: #1C1D21;
}
.dark .card-title{
    color: #E4E4E4 !important;
    font-weight: 500 !important;
}
.dark .card-desc{
    color: #E4E4E4 !important;
    font-weight: 500 !important;
} 
.dark .count{
    color: #E4E4E4 !important;
    font-weight: 600 !important;
} 
.dark .box-text{
    color: #E4E4E4 !important;
    font-weight: 500 !important;
}
.dark .footer-box{
    background: #1D2025 !important;
    box-shadow: 0px 0.2px 5px rgba(255, 255, 255, 0.15), 0px 4px 10px rgba(0, 0, 0, 0.25) !important;
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
.card .card-resname {
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