/*jslint browser: true */
(function () {
  'use strict';

  var casper = require('casper').create({
    clientScripts: [
      // test 대상이 되는 client-side script를 주입
      './src/_sample/sample-script.js'
    ],
    onError: function (self, m) {
      self.echo('FATAL:' + m);
      self.exit();
    },
    logLevel: 'info'
  });

  casper.test.comment(
    'sample testcases with client-side javascript "sample-script.js"'
  );

  casper.start("about:blank", function () {
    // may do something when casperjs started
  });

  casper.then(function () {
    this.test.assert(true,
      'this is definitely true');

    this.test.assertEval(function () {
      // test if browser object 'window' is accessible
      return !!window;
    }, 'browser object model access');

    this.test.assertEval(function () {
      // run client side javscript function
      // which returns "test"
      var result = window.testfunc();
      return (result === 'test');
    }, 'sample test case which runs client javascript');
  });

  casper.then(function () {
    this.exit();
  });

  casper.run();

}());
