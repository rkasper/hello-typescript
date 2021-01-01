// Import Chai assertions. See https://www.chaijs.com/guide/styles/ for more info.
import {assert} from 'chai';
import {Hello} from "../app/hello";

describe('Hello, TypeScript!', function () {
// We are using the Mocha test framework. See https://mochajs.org for more info. Write some tests. Enjoy!

    // Here's your first Mocha test: make sure Mocha works properly.
    it('Mocha and Chai are running properly', function() {
        assert.isTrue(true);
    });

    it('Hello, TypeScript', function() {
        let hello: Hello = new Hello();
        assert.equal(hello.message(), "Hello, TypeScript");
    });

    it('Hello, you', function() {
        let hello: Hello = new Hello();
        let myName = 'your name goes here';
        assert.equal(hello.message(myName), "Hello, " + myName);
    });

    it('Accepts any number of arguments', function() {
        let hello: Hello = new Hello();
        assert.equal(hello.message("one", "two", "three", "four"), "Hello, one two three four");
    });

});
