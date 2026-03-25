import {PLANETS} from '../constants/planets';
import {PLANETS_BG_COLORS} from '../constants/planets-styles';

export default function Header() {
	return (
		<header className='z-10'>
			<nav
				aria-label='Main Planet Navigation'
				className='flex flex-col lg:flex-row justify-between items-center gap-8 px-10 lg:px-8 py-8 lg:py-6 border-b border-b-neutral-0/20'>
				<strong className='text-preset-4 text-neutral-0'>THE PLANETS</strong>
				<ul className='hidden md:flex flex-row gap-10 items-center'>
					{PLANETS.map((planet) => (
						<li key={planet.id} className='relative group'>
							<a
								href={`#${planet.id}`}
								className='text-preset-10-bold text-neutral-0 uppercase opacity-75'>
								{planet.name}
							</a>
							<span
								className={`absolute left-0 right-0 -top-7 h-1 ${PLANETS_BG_COLORS[planet.id]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
							/>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
