String.prototype.startsWith || (String.prototype.startsWith = function(a, b) {
    return this.substr(!b || 0 > b ? 0 : +b, a.length) === a
});
(function(a) {
    a.documentElement.className = a.documentElement.className.replace(/(^|\s)no-js(\s|$)/, "$1js$2")
})(document);
window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
window.DOMTokenList && !DOMTokenList.prototype.forEach && (DOMTokenList.prototype.forEach = function(a, b) {
    b = b || window;
    for (var c = 0; c < this.length; c++) a.call(b, this[c], c, this)
});
