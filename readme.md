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

## Installation
Available on [npm](https://www.npmjs.com/) as [**@rocktimsaikia/github-card**](https://www.npmjs.com/package/@rocktimsaikia/github-card).

```sh
npm install @rocktimsaikia/github-card
```
or with `yarn`
```sh
yarn add @rocktimsaikia/github-card
```

## Usage

Since this an [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) web component, you can use it both as a script or through installtion.

```js
import '@rocktimsaikia/github-card'

<github-card data-user="rocktimsaikia"></github-card>
```

Or use it as a script in an `html` file :
```html
<script type="module" src="https://unpkg.com/@rocktimsaikia/github-card@latest?module"></script>
```

## Theme
You can also enable dark theme by setting the data-theme attribute to `dark`

```html
<github-card data-user="rocktimsaikia" data-theme="dark"></github-card>
```
## License

2021 © MIT [Rocktim Saikia](https://rocktimcodes.site)
