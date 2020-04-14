const minify = require('@node-minify/core');
const terser = require('@node-minify/terser');
const fs = require('fs');

minify({
    compressor: terser,
    input: ['src/widget.component.mjs'],
    output: '/dist/widget.min.mjs',
}).then((min) => {
    fs.writeFileSync('dist/widget.min.js', min, (err) => console.log(err));
});
