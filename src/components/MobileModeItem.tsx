import {PLANETS_BG_COLORS} from '../constants/planets-styles';
import {STEPS_BY_MODE} from '../constants/steps';

export default function MobileModeItem({
	mode,
	setMode,
	isSelected,
	planetID,
}: {
	mode: Mode;
	setMode: (mode: Mode) => void;
	isSelected: boolean;
	planetID: PlanetID;
}) {
	return (
		<li onClick={() => setMode(mode)} className='relative group cursor-pointer pb-2'>
			<p className='text-preset-11 text-neutral-0 uppercase'>
				{STEPS_BY_MODE[mode].mobileLabel}
			</p>
			{isSelected && (
				<div
					className={`absolute bottom-0 left-0 right-0 h-1 ${PLANETS_BG_COLORS[planetID]}`}
				/>
			)}
		</li>
	);
}
