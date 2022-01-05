"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Pais = connection_1.default.define('Catalogopais', {
    PaisId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, { timestamps: false });
exports.default = Pais;
//# sourceMappingURL=catalogopais.js.map