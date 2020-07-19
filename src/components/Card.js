const Card = ({ flag, name, params }) => {
	return (
		<div className='border border-secondary hover:border-ternary shadow-md rounded-lg overflow-hidden'>
			<div className='relative bg-ternary pb-3/5'>
				<img
					src={flag}
					alt={`${name} flag`}
					className='absolute h-full w-full object-cover'
				/>
			</div>
			<div className='bg-secondary p-4 tracking-wide'>
				<h2 className='mt-2 text-2xl font-bold truncate'>{name}</h2>
				<ul className='mt-2 text-sm'>
					{Object.keys(params).map((key) => (
						<li key={key} className='capitalize my-1'>
							<span className='font-semibold'>{key}: </span>
							<span>{params[key].toLocaleString() || 'NA'}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Card;
