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
			<PlanetInfo planet={PLANETS[0]} />
		</>
	);
}

export default App;
