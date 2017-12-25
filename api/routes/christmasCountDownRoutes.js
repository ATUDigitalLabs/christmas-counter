'use strict';
module.exports = function(app) {
    var christmasCountDown = require('../controllers/christmasCountDownController');

    // christmasCountDown Routes
    app.route('/')
        .get(christmasCountDown.get_current_count_down);

    app.route('/:year')
        .get(christmasCountDown.get_specific_count_down);
};
