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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCatalogopais = exports.putCatalogopais = exports.postCatalogopais = exports.getCatalogopais = exports.getCatalogopaises = void 0;
//TODO: crear los controladores
const getCatalogopaises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: "getCatalogopaises" });
});
exports.getCatalogopaises = getCatalogopaises;
const getCatalogopais = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    res.json({ msg: "getCatalogopaises", id });
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