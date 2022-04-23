import express from 'express'
import { registerUser } from '../controllers/user/regController.js'
import { getProfile } from '../controllers/user/profileController.js'
import { protect } from '../middleware/authMiddleware.js'
import { authUser } from '../controllers/user/authController.js'

const router = express.Router()

router.route('/profile').get(protect, getProfile)
router.route('/login').post(authUser)
router.route('/').post(registerUser)

export default router
