const path = require('path');
module.exports = {
    dist: (file = '') => path.resolve(__dirname, '../dist', file),
    src: (file = '') => path.resolve(__dirname, '../app/src', file),
}
