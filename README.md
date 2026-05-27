<div>
	<h1 align="center">github-card 🌈</h1>
	<p align="center">Beautiful embeddable GitHub profile card for your portfolio. <br/>
	<a href="https://rocktimsaikia.github.io/github-card/">https://rocktimsaikia.github.io/github-card/</a></p>
	<p align="center">
		<a href="https://github.com/rocktimsaikia/github-card/actions/workflows/main.yml"><img alt="CI" src="https://github.com/rocktimsaikia/github-card/actions/workflows/main.yml/badge.svg"/></a>
		<a href="https://www.npmjs.com/package/@rocktimsaikia/github-card"><img src="https://badge.fury.io/js/%40rocktimsaikia%2Fgithub-card.svg" alt="npm version"></a>
	</p>
	<p align="center"><a href="https://rocktimsaikia.github.io/github-card/"><img src="https://i.ibb.co/LdZZMdr/github-card.png"/></a></p>
</div>


## Highlights

- Tiny and zero-dependency (`~4kb`)
- Minimal and neat design
- Dark theme available

## Installation

```sh
npm install @rocktimsaikia/github-card
```
or with `yarn`
```sh
yarn add @rocktimsaikia/github-card
```

## Usage

Since this is an [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) web component, you can use it either through installation or directly as a script.

Import it in your JavaScript:

```js
import '@rocktimsaikia/github-card'
```

Then use the element anywhere in your HTML:

```html
<github-card data-user="rocktimsaikia"></github-card>
```

Or skip the install and load it straight from a CDN in an HTML file:

```html
<script type="module" src="https://unpkg.com/@rocktimsaikia/github-card@3.0.3"></script>
```

## Attributes

| Attribute | Required | Description |
| --- | --- | --- |
| `data-user` | yes | GitHub username to render the card for |
| `data-theme` | no | Set to `dark` for the dark theme; omit for the default light theme |

## Theme

```html
<github-card data-user="rocktimsaikia" data-theme="dark"></github-card>
```

## Customization

Override the accent color with the `--gh-accent` CSS custom property on the element:

```css
github-card {
	--gh-accent: #6366f1;
}
```

The card also surfaces `location`, `company`, and `website` from the GitHub profile when present.

## License

2026 © MIT [Rocktim Saikia](https://rocktimcodes.site)
