import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext.js'

export const useAuth = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)

	return {
		isAuth,
		setIsAuth,
	}
}
