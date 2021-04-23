<div>
	<h1 align="center">github-card 🌈</h1>
	<p align="center">Beautiful embeddable github profile card for your portfolio. <br/> 
    Here is a live <a href="https://codepen.io/RocktimSaikia/full/jObbBmR">codepen Demo</a></p>
	<p align="center">
		<a href="https://github.com/rocktimsaikia/github-card/actions"><img alt="CI" src="https://github.com/rocktimsaikia/github-card/workflows/CI/badge.svg"/></a>
		<a href="https://www.npmjs.com/package/@rocktimsaikia/github-card"><img src="https://badge.fury.io/js/%40rocktimsaikia%2Fgithub-card.svg" alt="npm version"></a>
	</p>
    <p align="center"><a href="https://codepen.io/RocktimSaikia/full/jObbBmR"><img src="https://i.ibb.co/LdZZMdr/github-card.png"/></a></p>
</div>


## Highlights 

- Tiny and Zero dependencies (`~4kb`)
- Simple and easy to use
- Minimal and neat design
- Dark theme available

## Usage

Using it as a script
```html
<script src="https://unpkg.com/@rocktimsaikia/github-card@2.1.2/dist/widget.min.js" type="module"></script>

<github-card data-user="rocktimsaikia"></github-card>
```

Through `npm`

```sh
npm install @rocktimsaikia/github-card
// or
yarn add @rocktimsaikia/github-card
```



```js
import '@rocktimsaikia/github-card'

<github-card data-user="rocktimsaikia"></github-card>
```

## Theme
You can also enable dark theme by setting the data-theme attribute to `dark`

```html
<github-card data-user="rocktimsaikia" data-theme="dark"></github-card>
```
## License

2021 © MIT [Rocktim Saikia](https://rocktimcodes.site)
