const widgetStyle = `
*, *::before, *::after {
	box-sizing: border-box;
}

.card {
	--accent: var(--gh-accent, #ff5c5c);
	--bg: #ffffff;
	--surface: #f6f8fa;
	--title: #1f2328;
	--text: #57606a;
	--muted: #8b949e;
	--border: rgba(31, 35, 40, 0.1);
	--shadow: 0 1px 3px rgba(31, 35, 40, 0.08), 0 12px 28px rgba(31, 35, 40, 0.12);

	position: relative;
	display: inline-block;
	width: 320px;
	padding: 0 28px 20px;
	background: var(--bg);
	border-radius: 16px;
	box-shadow: var(--shadow);
	text-align: center;
	overflow: hidden;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
	transform: translateY(-3px);
	box-shadow: 0 2px 6px rgba(31, 35, 40, 0.1), 0 20px 44px rgba(31, 35, 40, 0.18);
}

/* Dark theme just remaps the palette variables — no !important overrides. */
.card.dark {
	--bg: #16181d;
	--surface: #1f242c;
	--title: #e6edf3;
	--text: #adbac7;
	--muted: #768390;
	--border: rgba(255, 255, 255, 0.1);
	--shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 16px 36px rgba(0, 0, 0, 0.55);
}

a {
	text-decoration: none;
	color: inherit;
}

.cover {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 96px;
	background: var(--accent);
}

#github-logo {
	position: absolute;
	top: 14px;
	right: 14px;
	height: 22px;
	opacity: 0.85;
	transition: opacity 0.2s ease;
}
#github-logo:hover {
	opacity: 1;
}

.card-img-wrapper {
	position: relative;
	width: 104px;
	height: 104px;
	margin: 44px auto 8px;
}
.card-img-wrapper img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: cover;
	border: 4px solid var(--bg);
	background: var(--bg);
}

h1 {
	font-size: 21px;
	line-height: 1.2;
}

.card-title {
	display: inline-block;
	color: var(--title);
	font-size: 21px;
	font-weight: 700;
	letter-spacing: -0.01em;
}

.card-responsename {
	margin-top: 2px;
	color: var(--muted);
	font-size: 14px;
}

.card-desc {
	margin: 12px auto 0;
	max-width: 250px;
	color: var(--text);
	font-size: 13.5px;
	line-height: 1.5;
}

.card-meta {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 4px 14px;
	margin-top: 12px;
}
.meta-item {
	display: inline-flex;
	align-items: center;
	gap: 5px;
	max-width: 100%;
	color: var(--muted);
	font-size: 12.5px;
	line-height: 1.4;
}
.meta-item svg {
	flex-shrink: 0;
	width: 14px;
	height: 14px;
	opacity: 0.8;
}
.meta-link {
	transition: color 0.2s ease;
}
.meta-link:hover {
	color: var(--accent);
}

.card-footer {
	margin-top: 20px;
}
.footer-box {
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 13px 6px;
	border: 1px solid var(--border);
	border-top: 2px solid var(--accent);
	border-radius: 12px;
	background: var(--surface);
}
.box-wrapper {
	flex: 1;
}
.count {
	color: var(--title);
	font-size: 18px;
	font-weight: 700;
	font-variant-numeric: tabular-nums;
	line-height: 1.2;
}
.box-text {
	margin-top: 3px;
	color: var(--muted);
	font-size: 10.5px;
	font-weight: 600;
	letter-spacing: 0.4px;
	text-transform: uppercase;
}
`;

export default widgetStyle;
