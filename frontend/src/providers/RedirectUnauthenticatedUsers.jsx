/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { useAuthStore } from '../store/authStore'

const RedirectUnauthenticatedUser = ({ children }) => {
	const navigate = useNavigate()
	const { user } = useAuthStore()

	useEffect(() => {
		if (!user) {
			navigate('/login')
		}
	}, [user, navigate])

	// Render children only if there is a user
	if (!user) {
		return null // Don't render anything while redirecting
	}

	return <>{children}</>
}

export default RedirectUnauthenticatedUser
