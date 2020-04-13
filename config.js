const minify = require('@node-minify/core');
const terser = require('@node-minify/terser');
const fs = require('fs-extra');

if (fs.existsSync('dist')) {
    fs.removeSync('dist');
}

fs.copySync('src', 'dist');

minify({
    compressor: terser,
    input: 'src/widget.js',
    output: 'dist/widget.min.js',
    callback: function (err, min) { }
});

fs.writeFileSync('dist/index.js');