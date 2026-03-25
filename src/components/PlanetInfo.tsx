import {useState} from 'react';
import {useParams, Navigate} from 'react-router-dom';
import {PLANETS_IMAGES} from '../constants/planets-images';
import {PLANETS_BY_ID} from '../constants/planets';
import StatCard from './StatCard';
import ModeCard from './ModeCard';
import SourceIcon from '../assets/icon-source.svg';
import MobileModeItem from './MobileModeItem';

export default function PlanetInfo() {
	const {planetID} = useParams<{planetID: PlanetID}>();
	const planet = PLANETS_BY_ID[planetID!];

	const [mode, setMode] = useState<Mode>('overview');

	if (!planet) return <Navigate to='/earth' replace />;

	return (
		<main className='z-10 px-10'>
			<article id='mercury' className='flex flex-col items-center'>
				<section
					aria-labelledby='planet-heading'
					className='flex flex-col lg:flex-row items-center justify-center gap-32.5 xl:gap-75'>
					<nav className='flex md:hidden w-full'>
						<ul className='flex flex-row gap-2 justify-between w-full pt-5 border-b border-b-neutral-0/20'>
							<MobileModeItem
								mode='overview'
								setMode={setMode}
								isSelected={mode === 'overview'}
								planetID={planet.id}
							/>
							<MobileModeItem
								mode='structure'
								setMode={setMode}
								isSelected={mode === 'structure'}
								planetID={planet.id}
							/>
							<MobileModeItem
								mode='geology'
								setMode={setMode}
								isSelected={mode === 'geology'}
								planetID={planet.id}
							/>
						</ul>
					</nav>
					<figure className='relative'>
						<img
							src={
								mode === 'structure'
									? PLANETS_IMAGES[planet.id].structure
									: PLANETS_IMAGES[planet.id].overview
							}
							alt={`Illustration of ${planet.name} in ${mode} mode`}
							className='w-27.75 h-27.75 md:w-46 md:h-46 lg:w-72.5 lg:h-72.5'
						/>
						{mode === 'geology' && (
							<img
								src={PLANETS_IMAGES[planet.id].geology}
								alt={`Illustration of ${planet.name} in ${mode} mode`}
								className='h-25 md:h-37.5 lg:h-50 absolute top-21 md:top-36 lg:top-56.5 left-1/2 -translate-x-1/2 pointer-events-none'
							/>
						)}
					</figure>

					<div className='flex flex-row lg:flex-col gap-17.5 lg:gap-10 w-full lg:w-87.5 pt-24.5 pb-7 md:pt-32.5 md:pb-6.75 lg:pt-21.5 lg:pb-31.75'>
						<div className='flex flex-col gap-4 md:gap-6 text-center md:text-left'>
							<h1
								id='planet-heading'
								className='text-preset-3 md:text-preset-2 lg:text-preset-1 text-neutral-0 uppercase'>
								{planet.name}
							</h1>
							<p className='text-preset-10-regular lg:text-preset-8-regular text-neutral-0 pb-4 mb:pb-2 lg:pb-0'>
								{planet[mode].content}
							</p>
							<div className='text-neutral-0 opacity-50 text-preset-9-regular lg:text-preset-8-regular flex flex-row items-center gap-2'>
								<p>Source:</p>
								<a
									href={planet[mode].source}
									target='_blank'
									className='text-preset-8-bold underline'>
									Wikipedia
								</a>
								<img src={SourceIcon} className='w-3 h-3' />
							</div>
						</div>

						<nav
							aria-label='Information categories'
							className='hidden md:flex flex-col gap-4'>
							<ModeCard
								mode='overview'
								isSelected={mode === 'overview'}
								planetID={planet.id}
								setMode={setMode}
							/>
							<ModeCard
								mode='structure'
								isSelected={mode === 'structure'}
								planetID={planet.id}
								setMode={setMode}
							/>
							<ModeCard
								mode='geology'
								isSelected={mode === 'geology'}
								planetID={planet.id}
								setMode={setMode}
							/>
						</nav>
					</div>
				</section>

				<section aria-label='Mercury Statistics' className='w-full'>
					<dl className='flex flex-col md:flex-row justify-center gap-2 md:gap-2.5 xl:gap-7.5'>
						<StatCard label='Rotation time' value={planet.rotation} />
						<StatCard label='Revolution time' value={planet.revolution} />
						<StatCard label='Radius' value={planet.radius} />
						<StatCard label='Average temp.' value={planet.temperature} />
					</dl>
				</section>
			</article>
		</main>
	);
}
