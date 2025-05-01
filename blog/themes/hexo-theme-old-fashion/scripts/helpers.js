hexo.extend.helper.register('excerpt_clean', function (html, count = 150, ellipsis = '...') {
    if (!html || typeof html !== 'string') return '';
    let text = html.replace(/<[^>]+>/g, '');
    text = text.replace(/\s+/g, ' ').trim();
    if (text.length <= count) return text;
    let lastSpace = text.lastIndexOf(' ', count);
    return text.substring(0, lastSpace) + (text.length > count ? ellipsis : '');
});