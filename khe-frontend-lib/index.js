"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var config_1 = require("./config");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.isValid = function () { return false; };
    User.prototype.getValidator = function () { return null; };
    return User;
}());
var Application = /** @class */ (function () {
    function Application() {
    }
    return Application;
}());
var ApiWrapper = /** @class */ (function () {
    function ApiWrapper() {
        this._axios = axios_1["default"].create();
    }
    ApiWrapper.prototype.Login = function (username, password) {
        var _this = this;
        return this._axios.get(config_1.API_BASE + '/token', {
            data: {
                client: "id",
                email: "",
                password: ""
            }
        })
            .then(function (response) {
            _this.currentUser = response.data;
        })["catch"](function (error) {
            console.log("login failed");
        });
    };
    return ApiWrapper;
}());
