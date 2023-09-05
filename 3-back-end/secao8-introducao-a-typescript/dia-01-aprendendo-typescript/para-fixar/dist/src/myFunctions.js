"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itsMostActiveUser = exports.getUsersByRepoQuantity = exports.getUsersName = void 0;
const getUsersName = (userList) => userList.map((user) => user.name);
exports.getUsersName = getUsersName;
const getUsersByRepoQuantity = (users, repos) => users.filter((user) => user.repositories >= repos).map((user) => user.name);
exports.getUsersByRepoQuantity = getUsersByRepoQuantity;
const itsMostActiveUser = (name, users) => {
    const mostActive = users.reduce((acc, crr) => crr.repositories >= acc.repositories ? crr : acc);
    return name == mostActive.name;
};
exports.itsMostActiveUser = itsMostActiveUser;
