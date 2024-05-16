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
const crearUsuarios = (url, cantidad) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 1; i <= cantidad; i++) {
        const usuario = {
            cedula: i,
            correo: `usuario${i}@ejemplo.com`,
            contrasena: `contrasena${i}`,
            esEstudiante: i % 2 === 0, // true para números pares, false para impares
            esProfesor: i % 3 === 0, // true para múltiplos de 3
            esAdmin: i % 5 === 0, // true para múltiplos de 5
            sede: `sede${i}`,
            status: "active",
            captcha: "6Le2S9cpAAAAACwmjzPeDgR7AuS64D-fI5KAOouw",
        };
        yield fetch(`${url}/registro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });
    }
});
exports.default = crearUsuarios;
