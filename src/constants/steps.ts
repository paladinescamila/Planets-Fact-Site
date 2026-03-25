export const STEPS: {step: number; mode: Mode; label: string; mobileLabel: string}[] = [
	{step: 1, mode: 'overview', label: 'Overview', mobileLabel: 'Overview'},
	{step: 2, mode: 'structure', label: 'Internal Structure', mobileLabel: 'Structure'},
	{step: 3, mode: 'geology', label: 'Surface Geology', mobileLabel: 'Surface'},
];

export const STEPS_BY_MODE: Record<Mode, {step: number; label: string; mobileLabel: string}> =
	STEPS.reduce(
		(acc, {step, mode, label, mobileLabel}) => {
			acc[mode] = {step, label, mobileLabel};
			return acc;
		},
		{} as Record<Mode, {step: number; label: string; mobileLabel: string}>,
	);
