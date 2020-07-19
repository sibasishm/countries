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
			<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-ternary'>
				<img
					src='/search-outline.svg'
					alt='search'
					className='h-4 inline-block'
				/>
			</div>
		</div>
	);
};

export default Searchbox;
