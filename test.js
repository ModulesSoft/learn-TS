"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var user = new User_1.default("1234567890", "test@test.com");
user.password = "ssssssssssssssssssssssssssss";
console.log(user.password);
