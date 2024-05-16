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
const models_1 = require("../models");
const crearUsuarios_1 = __importDefault(require("./crearUsuarios"));
const crearAdmin_1 = __importDefault(require("./crearAdmin"));
const dataFakeGeneration = (url, cantidad) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(process.env.NODE_ENV === "dev")) {
        console.log("No se puede ejecutar en producción");
        return;
    }
    try {
        const usuario = yield models_1.Usuario.findOne({
            where: { correo: "usuario99@ejemplo.com" },
        });
        if (usuario) {
            return;
        }
    }
    catch (error) { }
    yield (0, crearAdmin_1.default)(url);
    yield (0, crearUsuarios_1.default)(url, cantidad);
});
exports.default = dataFakeGeneration;