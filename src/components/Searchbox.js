const Searchbox = () => {
	return (
		<div className='inline-block relative w-1/3'>
			<label htmlFor='search' className='hidden'></label>
			<input
				type='text'
				name='search'
				id='search'
				placeholder='search for a country'
				className='appearance-none block w-full bg-secondary border border-secondary hover:border-ternary px-12 py-3 pl-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
			/>
			<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center px-4'>
				<svg
					className='w-4 h-4'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
					/>
				</svg>
			</div>
		</div>
	);
};

export default Searchbox;
