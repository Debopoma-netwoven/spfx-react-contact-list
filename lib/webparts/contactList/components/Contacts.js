"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ContactList_module_scss_1 = require("./ContactList.module.scss");
exports.ContactDetail = function (props) {
    return (React.createElement("div", { className: ContactList_module_scss_1.default.contact },
        React.createElement("p", { className: ContactList_module_scss_1.default.contactName },
            " ",
            props.data.ContactName),
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-sm-3" },
                React.createElement("img", { width: "75px", height: "75px", src: props.data.Image })),
            React.createElement("div", { className: "col-sm-9" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-12" },
                        React.createElement("span", { className: ContactList_module_scss_1.default.contactTitle }, "Company: "),
                        React.createElement("span", { className: ContactList_module_scss_1.default.contactValue },
                            props.data.Company,
                            " "))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-12" },
                        React.createElement("span", { className: ContactList_module_scss_1.default.contactTitle }, "Designation: "),
                        React.createElement("span", { className: ContactList_module_scss_1.default.contactValue },
                            props.data.Designation,
                            " "))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-12" },
                        React.createElement("span", { className: ContactList_module_scss_1.default.contactTitle }, "Age: "),
                        React.createElement("span", { className: ContactList_module_scss_1.default.contactValue },
                            props.data.Age,
                            " "))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-12" },
                        React.createElement("span", { className: ContactList_module_scss_1.default.contactTitle }, "Location: "),
                        React.createElement("span", { className: ContactList_module_scss_1.default.contactValue },
                            props.data.Location,
                            " "))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-7" }),
                    React.createElement("div", { className: "col-sm-2" },
                        React.createElement("button", { type: "button" },
                            React.createElement("i", { className: "glyphicon glyphicon-pencil" }))),
                    React.createElement("div", { className: "col-sm-3" },
                        React.createElement("button", { type: "button" },
                            React.createElement("i", { className: "glyphicon  glyphicon-remove" }))))))));
};
exports.default = exports.ContactDetail;

//# sourceMappingURL=Contacts.js.map
