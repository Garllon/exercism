"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_world_1 = require("./hello-world");
describe('Hello World', function () {
    it('says hello world', function () {
        expect((0, hello_world_1.hello)()).toEqual('Hello, World!');
    });
});
