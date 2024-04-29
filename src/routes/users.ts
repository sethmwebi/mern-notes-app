import { Router } from "express"
import * as UserController from "../controllers/users"
import { requiresAuth } from "../middleware/auth"

const router: Router = Router()

router.get("/", requiresAuth, UserController.getAuthenticatedUser)
router.post("/signup", UserController.signUp)
router.post("/login", UserController.login)
router.post("/logout", UserController.logout)

export default router
