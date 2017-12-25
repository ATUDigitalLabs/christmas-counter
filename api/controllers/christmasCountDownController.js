'use strict';

exports.get_current_count_down = function(req, res) {
    var date = new Date();
    var year = date.getFullYear();
    if (date.getMonth()>10 && date.getDate()>24) {
        year++;
    }

    var dateChristmas = new Date();
    dateChristmas.setFullYear(year, 11, 24);

    var days = Number((dateChristmas - date) / 86400000).toFixed(0);
    res.json(days.toString());
};

exports.get_specific_count_down = function(req, res) {
    var date = new Date();

    var dateChristmas = new Date();
    dateChristmas.setFullYear(Number(req.params.year.toString()), 11, 24);

    var days = Number((dateChristmas - date) / 86400000).toFixed(0);
    res.json(days.toString());

    res.json("Test: "+req.params.year.toString());
};