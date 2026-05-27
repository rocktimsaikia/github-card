// Sanitize a user-supplied URL (e.g. a GitHub profile's `blog` field) before
// using it in an href: allow only http(s), assume https when no scheme is given,
// and reject anything else (javascript:, data:, …) to avoid script injection.
function safeUrl(value) {
	if (!value) return '';
	const url = String(value).trim();
	if (/^https?:\/\//i.test(url)) return url;
	if (/^[a-z][a-z\d+.-]*:/i.test(url)) return ''; // some other scheme → reject
	return `https://${url}`;
}

export default safeUrl;
