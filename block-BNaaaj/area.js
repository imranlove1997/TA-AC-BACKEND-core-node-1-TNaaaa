function square(num) {
    return num * num;
}

function rectangle(l, b) {
    return l * b;
}

function circle(rad) {
    return 2 * 3.14 * rad;
}

module.exports = {
    square: square,
    rectangle: rectangle,
    circle: circle,
};