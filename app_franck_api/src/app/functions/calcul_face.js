module.exports = {
    air: (a, b) => {
        return a * b;
    },
    air_pinion: (a, b) => {
        return Math.sqrt(Math.pow(a / 2, 2) + Math.pow(b, 2)) * 2;
    }
}