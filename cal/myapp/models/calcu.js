// calul.js
function Calcu () {
    
}

Calcu.prototype.plus = function (a, b, t, callback) {
    t = Number(t)
    a = Number(a);
    b = Number(b);
    switch (t) {
        case 1:
            callback(null, a + b);
            break;
        case 2:
            callback(null, b - a);
            break;
        case 3:
            callback(null, a * b);
            break;
        case 4:
            callback(null, b / a);
            break;
    }
}

module.exports = Calcu;
