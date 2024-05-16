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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { CORREO_ADMIN, CONTRASENA_ADMIN, CONTRASENA_ENDPOINT_REGISTRO_ADMIN, } = process.env;
const crearAdmin = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = {
        cedula: 25074591,
        correo: CORREO_ADMIN,
        contrasena: CONTRASENA_ADMIN,
        esAdmin: true,
        contrasenaEndpoint: CONTRASENA_ENDPOINT_REGISTRO_ADMIN,
    };
    yield fetch(`${url}/registro/admin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
    });
});
exports.default = crearAdmin;
