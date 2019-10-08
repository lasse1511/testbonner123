
exports.getStart = function(req, res) {
    res.render('start');
}

exports.getHome = function(req, res) {
    res.end('Hello world')
}