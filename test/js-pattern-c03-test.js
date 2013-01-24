(function () {
  'use strict';

  var casper = require('casper').create({
    remoteScripts: [
      'http://underscorejs.org/underscore.js'
    ],
    onError: function (self, m) {
      self.echo('FATAL:' + m);
      self.exit();
    },
    logLevel: 'info'
  });  

  casper.test.comment('testcases on javascript patterns chapter 03');

  casper.start('about:blank', function () {
    // may do something when casperjs started
  });
 
  // TODO: casper.test로 중첩을 줄임
  casper.then(function () {
    this.test.assertEval( function() {

      var ten_times = _.map(
          [1,2,3], 
          function(num) {return (num * 10);});  // callback함수
      return ((ten_times[0] === 10) && 
              (ten_times[1] === 20) &&
              (ten_times[2] === 30));
    }, 'underscore.js를 이용한 callback: _.map으로 [1,2,3]을 *10함');

  });

  casper.then(function () {
    this.exit();
  });
 
  casper.run();
}());


