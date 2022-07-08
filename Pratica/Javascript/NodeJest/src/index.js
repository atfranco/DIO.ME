"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importa
const express_1 = __importDefault(require("express"));
//define
const server = (0, express_1.default)();
//habilita sv a ler o json
server.use(express_1.default.json());
// porta
server.listen(5000, () => {
    console.log('servidor on na porta 5000');
});
