import {useState} from 'react';
import {useParams, Navigate} from 'react-router-dom';
import {PLANETS_IMAGES} from '../constants/planets-images';
import {PLANETS_BY_ID} from '../constants/planets';
import StatCard from './StatCard';
import ModeCard from './ModeCard';
import SourceIcon from '../assets/img/icon-source.svg';
import MobileModeItem from './MobileModeItem';
import {PLANETS_SIZES} from '../constants/planets-styles';
import {STEPS} from '../constants/steps';

export default function PlanetInfo() {
	const {planetID} = useParams<{planetID: PlanetID}>();
	const planet = PLANETS_BY_ID[planetID!];

	const [mode, setMode] = useState<Mode>('overview');

	if (!planet) return <Navigate to='/earth' replace />;

	return (
		<main className='z-10 flex-1 flex flex-col'>
			<article id={planetID} className='flex flex-col items-center w-full flex-1 gap-6'>
				<section
					aria-labelledby='planet-heading'
					className='flex flex-col lg:flex-row items-center w-full flex-1 lg:pr-41.25 gap-y-6 md:gap-y-5'>
					<nav className='flex md:hidden w-full'>
						<ul className='flex flex-row gap-2 justify-between w-full pt-5 border-b border-b-neutral-0/20 px-5'>
							{STEPS.map((step) => (
								<MobileModeItem
									mode={step.mode}
									setMode={setMode}
									isSelected={mode === step.mode}
									planetID={planet.id}
								/>
							))}
						</ul>
					</nav>
					<figure className='relative flex-1 flex flex-col items-center justify-center px-4 md:px-10'>
						<img
							src={
								mode === 'structure'
									? PLANETS_IMAGES[planet.id].structure
									: PLANETS_IMAGES[planet.id].overview
							}
							alt={`Illustration of ${planet.name} in ${mode} mode`}
							className={PLANETS_SIZES[planet.id]}
						/>
						{mode === 'geology' && (
							<img
								src={PLANETS_IMAGES[planet.id].geology}
								alt={`Illustration of ${planet.name} in ${mode} mode`}
								className='h-25 md:h-37.5 xl:h-50 absolute top-3/5 left-1/2 -translate-x-1/2 pointer-events-none'
							/>
						)}
					</figure>

					<div className='flex flex-row lg:flex-col gap-17.5 lg:gap-10 w-full lg:w-87.5 px-4 md:px-10 lg:px-0'>
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
								<img src={SourceIcon} className='w-3 h-3' alt='Source icon' />
							</div>
						</div>

						<nav
							aria-label='Information categories'
							className='hidden md:flex flex-col gap-4'>
							{STEPS.map((step) => (
								<ModeCard
									mode={step.mode}
									isSelected={mode === step.mode}
									planetID={planet.id}
									setMode={setMode}
								/>
							))}
						</nav>
					</div>
				</section>

				<section aria-label='Mercury Statistics' className='w-full pb-12 md:pb-9 lg:pb-14'>
					<dl className='flex flex-col md:flex-row justify-center gap-2 md:gap-2.5 xl:gap-7.5 px-4 md:px-10'>
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
