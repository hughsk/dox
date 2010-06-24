
/*!
 * This will not be parsed... due to "*!"
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var sys = require('sys'),
    fs = require('fs');

/**
 * Files used by exports.output();
 */

var files = ['foo.js', 'bar.js'];

/**
 * Output contents of _foo.js_ and _bar.js_.
 *
 * ## Stuff:
 *
 * This is just a stupid random demo, so... here is a list:
 *
 *   - a
 *     * b
 *     * c
 *       - d
 *       - e
 *   - f
 *
 * ## Examples:
 *
 *     require('foo').output();
 *
 * Just a [link](http://github.com/visionmedia/dox) to dox's _source_.
 *
 * ## HTML
 *
 * Is escaped, <script>alert("mwahaha")</script> for example :).
 *
 * More Examples:
 *
 *     {
 *       foo: 'bar',
 *       baz: 'raz'
 *     } 
 * 
 * @param {String} nothing a string that does nothing
 * @return {Object} exports for chaining
 * @api public
 */

var output = exports.output = function(nothing){
    for (var i = 0, len = files.length; i < len; ++i) {
        var file = files[i];
        // Just some stupid comment
        if (file.match(/\.js$/)) {
            fs.readFile(file, function(err, str){
               if (err) {
                   // lalalalala
                   throw err;
               } else {
                   sys.puts(str); 
               }
            });
        }
    }
    return this;
}