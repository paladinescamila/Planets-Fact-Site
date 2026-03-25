import {Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/Header';
import PlanetInfo from './components/PlanetInfo';
import {PLANETS} from './constants/planets';
import BackgroundStarsImage from './assets/background-stars.svg';

function App() {
	return (
		<>
			<img
				src={BackgroundStarsImage}
				alt='Background stars'
				className='absolute inset -z-1 w-screen h-screen object-cover'
			/>
			<Header />
			<Routes>
				<Route path='/' element={<Navigate to='/earth' replace />} />
				{PLANETS.map((planet) => (
					<Route key={planet.id} path={`/:planetID`} element={<PlanetInfo />} />
				))}
				<Route path='*' element={<Navigate to='/earth' replace />} />
			</Routes>
		</>
	);
}

export default App;
