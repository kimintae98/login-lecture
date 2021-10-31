"use strict";

const { request } = require("../../../app");

const output = {
    home:  (req,res) => {
        res.render("home/index");
    },
    
    login: (req,res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["kit1998", "kit1234"],
    psword: ["1234", "123"],
};

const process = {
    login: (req,res) => {
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
}; 

module.exports = {
    output,
    process,
}; 