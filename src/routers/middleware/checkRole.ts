import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const checkRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const JWTSECRETO = process.env.JWTSECRETO || "jwt-secret";
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.split(" ")[1];

      jwt.verify(token, JWTSECRETO, (err, user: any) => {
        if (err) {
          return res.sendStatus(403);
        }

        // Comprueba si el usuario tiene el rol requerido

        if (user && user[role]) {
          (req as any).body.user = user;
          next();
        } else {
          res.status(403).json({ message: "Acceso denegado" });
        }
      });
    } else {
      res.sendStatus(401);
    }
  };
};

export default checkRole;
