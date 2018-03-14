"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ContactList_module_scss_1 = require("./ContactList.module.scss");
var Contacts_1 = require("./Contacts");
var axios_1 = require("axios");
require("bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");
var ContactList = (function (_super) {
    __extends(ContactList, _super);
    function ContactList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            contactList: []
        };
        return _this;
    }
    ContactList.prototype.componentDidMount = function () {
        var _this = this;
        console.log("componentDidMount");
        axios_1.default.get("https://netwoveninc.sharepoint.com/sites/debopomademo/_api/web/lists/getbytitle('ContactList')/items?$select=Id,ContactName,Company,Designation,Age,Location,Image")
            .then(function (response) {
            var arrContacts = [];
            console.log("get  data");
            console.log(response.data);
            arrContacts = response.data.value;
            _this.setState({ contactList: arrContacts });
            console.log(arrContacts);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ContactList.prototype.render = function () {
        return (React.createElement("div", { className: "col-sm-12" },
            React.createElement("div", { className: "row" }),
            React.createElement("div", { className: "row" },
                React.createElement("div", __assign({ className: ContactList_module_scss_1.default.contactContainer }, "col-sm-4"), this.state.contactList.map(function (element, index) {
                    return React.createElement(Contacts_1.default, { key: index, data: element });
                })))));
    };
    return ContactList;
}(React.Component));
exports.default = ContactList;

//# sourceMappingURL=ContactList.js.map
