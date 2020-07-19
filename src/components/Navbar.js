import Link from 'next/link';

const Navbar = ({ theme, handleThemeChange }) => {
	return (
		<nav className='flex items-center justify-between p-4 md:px-8 lg:px-16 border-b-2 border-ternary bg-secondary'>
			<Link href='/'>
				<a className='font-bold tracking-wide md:text-2xl'>
					Where in the world?
				</a>
			</Link>
			<button
				className='flex items-center p-2 hover:shadow focus:outline-none focus:shadow-outline rounded'
				onClick={() =>
					handleThemeChange(
						theme === 'theme-light' ? 'theme-dark' : 'theme-light'
					)
				}
			>
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
