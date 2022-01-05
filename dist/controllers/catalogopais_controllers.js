"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCatalogopais = exports.putCatalogopais = exports.postCatalogopais = exports.getCatalogopais = exports.getCatalogopaises = void 0;
const catalogopais_1 = __importDefault(require("../models/catalogopais"));
//TODO: crear los controladores
const getCatalogopaises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pais = yield catalogopais_1.default.findAll();
    res.json({ pais });
});
exports.getCatalogopaises = getCatalogopaises;
const getCatalogopais = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pais = yield catalogopais_1.default.findByPk(id);
    if (pais) {
        res.json(pais);
    }
    else {
        return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });
    }
});
exports.getCatalogopais = getCatalogopais;
const postCatalogopais = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    res.json({ msg: "postCatalogopais", body });
});
exports.postCatalogopais = postCatalogopais;
const putCatalogopais = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    res.json({ msg: "putCatalogopais", id, body });
});
exports.putCatalogopais = putCatalogopais;
const deleteCatalogopais = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    res.json({ msg: "deleteCatalogopais", id });
});
exports.deleteCatalogopais = deleteCatalogopais;
//# sourceMappingURL=catalogopais_controllers.js.map