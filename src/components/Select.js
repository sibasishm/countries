const Select = () => {
	return (
		<div className='inline-block relative w-40'>
			<select
				name='region'
				id='region'
				className='block appearance-none w-full bg-secondary border border-secondary hover:border-ternary px-6 py-3 pr-6 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
			>
				<option value='africa'>Africa</option>
				<option value='asia'>Asia</option>
				<option value='america'>America</option>
				<option value='europe'>Europe</option>
				<option value='ocenia'>Ocenia</option>
			</select>
			<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-quaternary'>
				<svg
					className='fill-current h-4 w-4'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
				>
					<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
				</svg>
			</div>
		</div>
	);
};

export default Select;
