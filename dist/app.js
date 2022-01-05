"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./db/server"));
//para usar la configuracion por defecto y usar todas las variables de entorno
dotenv_1.default.config();
//TODO: aca se instancia el servidor
const server = new server_1.default();
server.listen();
//# sourceMappingURL=app.js.map