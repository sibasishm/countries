const Card = ({ flag, name, params }) => {
	return (
		<div className='border shadow-md rounded-lg overflow-hidden'>
			<div className='relative bg-gray-400 pb-3/5'>
				<img
					src={flag}
					alt={`${name} flag`}
					className='absolute h-full w-full object-cover'
				/>
			</div>
			<div className='bg-white p-4 h-full'>
				<h2 className='mt-2 text-2xl font-bold'>{name}</h2>
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
