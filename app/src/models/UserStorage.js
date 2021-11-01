"use strict";

class UserStorage {
    static #users = {
        id: ["kit1998", "kit1234"],
        psword: ["1234", "123"],
        name: ["김인태", "이인태"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUsersInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});
        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return {success: true};
    }

};

module.exports = UserStorage;