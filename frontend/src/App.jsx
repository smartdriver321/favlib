import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router'

import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import AddBook from './pages/AddBook'
import Homepage from './pages/Homepage'
import Bookpage from './pages/Bookpage'
import Searchpage from './pages/Searchpage'
import UpdateBook from './pages/UpdateBook'
import { useAuthStore } from './store/authStore'
import RedirectAuthenticatedUser from './providers/RedirectAuthenticatedUsers'
import RedirectUnauthenticatedUser from './providers/RedirectUnauthenticatedUsers'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
	const { fetchUser, fetchingUser } = useAuthStore()

	useEffect(() => {
		fetchUser()
	}, [fetchUser])

	if (fetchingUser) {
		return <p>Loading...</p>
	}

	return (
		<>
			<Toaster />
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route
					path='/signup'
					element={
						<RedirectAuthenticatedUser>
							<SignUp />
						</RedirectAuthenticatedUser>
					}
				/>
				<Route
					path='/login'
					element={
						<RedirectAuthenticatedUser>
							<LogIn />
						</RedirectAuthenticatedUser>
					}
				/>

				<Route
					path='/add-book'
					element={
						<RedirectUnauthenticatedUser>
							<AddBook />
						</RedirectUnauthenticatedUser>
					}
				/>

				<Route path='/books/:id' element={<Bookpage />} />
				<Route
					path='/books/:id/update'
					element={
						<RedirectUnauthenticatedUser>
							<UpdateBook />
						</RedirectUnauthenticatedUser>
					}
				/>
				<Route path='/search' element={<Searchpage />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
