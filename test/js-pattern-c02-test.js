(function () {
    'use strict';

    // TODO: add client-side javascript on 'clientScripts'
    var casper = require('casper').create({
        clientScripts: [
        ],
        onError: function (self, m) {
            self.echo('FATAL:' + m);
            self.exit();
        },
        logLevel: 'info'
    });

    casper.test.comment('testcases on javascript pattern chapter 02');

    casper.start('about:blank', function () {
        // may do something when casperjs started
    });

    casper.then(function () {
        this.test.assertEval(function () {
            // TODO: write down some test
            return true;
        }, ':chapter2 - sample test case 01');
    });

    casper.then(function () {
       this.exit();
    });

    casper.run();

})();
