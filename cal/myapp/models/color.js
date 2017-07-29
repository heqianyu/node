// color.js
function Cotr() {}

Cotr.prototype.torgb = function (a, callback) {
    this.val = a;

    this.val = this.val.substring(1, 7)
    console.log(this.val)
    var rgba = 'rgba('
    for (var i = 0; i < this.val.length; i += 2) {
        var cc = parseInt(this.val.substring(i, i + 2), 16)
        rgba = rgba + cc + ','
    }
    var tran = 1
    color = rgba = rgba + tran + ')'
    callback(null, color);
}

Cotr.prototype.tohex = function (r, g, b, callback) {

    r = ("0" + Number(r).toString(16)).slice(-2);
    g = ("0" + Number(g).toString(16)).slice(-2);
    b = ("0" + Number(b).toString(16)).slice(-2);
    color = "#" + r + g + b;
    callback(null, color);
}

module.exports = Cotr;