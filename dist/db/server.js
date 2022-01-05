"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//TODO: se crea la carpeta contenedora de los archivos de la base de datos
//TODO: se crea la clase del servidor y se debe de crear el constructor
const express_1 = __importDefault(require("express"));
const catalogopais_routes_1 = __importDefault(require("../routes/catalogopais_routes"));
class Server {
    constructor() {
        //TODO configuracion del endpoint del api
        this.apiPaths = {
            catalogopais: '/api/catalogopais'
        };
        this.app = (0, express_1.default)();
        //TODO || es el operador or
        this.port = process.env.PORT || '3000';
        //TODO: definir mis rutas
        this.routes();
    }
    routes() {
        this.app.use(this.apiPaths.catalogopais, catalogopais_routes_1.default);
    }
    //TODO: metodo para escuchar el puerto
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map