import {PLANETS_STYLES} from '../constants/planets-styles';
import {STEPS_BY_MODE} from '../constants/steps';

export default function ModeCard({
	mode,
	isSelected,
	planetID,
	setMode,
}: {
	mode: Mode;
	isSelected: boolean;
	planetID: PlanetID;
	setMode: (mode: Mode) => void;
}) {
	return (
		<button
			type='button'
			onClick={() => setMode(mode)}
			className={`flex flex-row items-center gap-7.5 w-70 lg:w-87.5 px-5 py-2 lg:px-6 lg:py-3 text-start text-preset-11 lg:text-preset-9-bold text-neutral-0 uppercase cursor-pointer border ${isSelected ? PLANETS_STYLES[planetID] : 'border-neutral-0/20 hover:bg-neutral-400/20'}`}>
			<span className='opacity-50'>0{STEPS_BY_MODE[mode].step}</span>{' '}
			{STEPS_BY_MODE[mode].label}
		</button>
	);
}
