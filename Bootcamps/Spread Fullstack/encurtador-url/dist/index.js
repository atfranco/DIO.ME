"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URLController_1 = require("./controller/URLController");
const express_1 = __importDefault(require("express"));
const api = (0, express_1.default)();
api.use(express_1.default.json());
const urLController = new URLController_1.URLController();
api.post('/shorten', urLController.shorten);
api.get('/:hash', urLController.redirect);
api.listen(5000, () => console.log('Express acompanhando(listening)'));
//# sourceMappingURL=index.js.map