const stripHtml = require('string-strip-html');

hexo.extend.helper.register('excerpt_clean', function (content, length = 150) {
    const text = stripHtml(content).result;
    return text.substring(0, length) + (text.length > length ? '...' : '');
});