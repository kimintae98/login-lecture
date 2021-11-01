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
};

module.exports = UserStorage;