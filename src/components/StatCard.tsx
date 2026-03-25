export default function StatCard({label, value}: {label: string; value: string}) {
	return (
		<div className='w-full xl:w-63.75 px-6 py-2.5 md:p-4 lg:p-6 flex flex-row md:flex-col justify-between items-center md:items-start gap-1 uppercase border border-neutral-0/20'>
			<dt className='text-preset-12 md:text-preset-12 lg:text-preset-10-bold text-neutral-0 opacity-50'>
				{label}
			</dt>
			<dd className='text-preset-6 md:text-preset-5 lg:text-preset-3 text-neutral-0'>
				{value}
			</dd>
		</div>
	);
}
