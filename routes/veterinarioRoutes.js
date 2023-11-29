import express, { Router } from "express";
const router = express.Router();
import {
  perfil,
  registrar,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
} from "../controllers/veterinarioControllers.js";
import checkAuth from "../middleware/authMiddleware.js";
//endpoint
// area publica
router.post("/", registrar);

router.get("/confirm/:token", confirmar);

router.post("/login", autenticar);

router.post("/forget-password", olvidePassword);

router.route("/forget-password/:token").get(comprobarToken).post(nuevoPassword);

//Area privada
router.get("/perfil", checkAuth, perfil);

export default router;
