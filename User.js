"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(_password, _email) {
        this._password = _password;
        this._email = _email;
    }
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (newPassword) {
            if (newPassword.length > 10)
                this._password = newPassword;
            else
                new Error("the provided password is too short!");
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.default = User;
