module.exports = function (req, res, next) {
    //назначаем новый метод для res
    res.sendHttpError = function (error) {
        res.status(err.status);

        //если используется запрос AJAX, отправляе json.
        if (res.req.headers['x-requested-with'] === 'XMLHttpRequest') {
            res.json(error);
        } else {
            res.render('error', {
                error: 'Error'
            });
        }
    };
    //передаем управление дальше
    next();
};