import Home from './components/pages/Home/Home.jsx'
import NewWorkout from './components/pages/NewWorkout/NewWorkout.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/new-workout">
					<NewWorkout />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
