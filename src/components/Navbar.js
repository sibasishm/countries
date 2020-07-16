import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='flex items-center justify-between p-4 md:px-8 lg:px-16 border-b-2 border-gray-300 bg-white'>
			<Link href='/'>
				<a className='font-bold tracking-wide md:text-2xl'>
					Where in the world?
				</a>
			</Link>
			<button className='flex items-center'>
				<img
					className='h-4 inline-block mr-2'
					src='/moon-outline.svg'
					alt='dark mode'
				/>
				<span className='hidden md:inline'>Dark Mode</span>
			</button>
		</nav>
	);
};

export default Navbar;
