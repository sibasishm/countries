const Navbar = ({ theme, handleThemeChange }) => {
	return (
		<nav className='flex items-center justify-between p-4 md:px-8 lg:px-16 border-b-2 border-ternary bg-secondary'>
			<h1 className='font-bold tracking-wide md:text-2xl'>
				Where in the world?
			</h1>
			<button
				className='flex items-center p-2 hover:shadow focus:outline-none focus:shadow-outline rounded'
				onClick={() =>
					handleThemeChange(
						theme === 'theme-light' ? 'theme-dark' : 'theme-light'
					)
				}
			>
				{theme === 'theme-light' ? (
					<svg
						className='w-5 h-5'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
						/>
					</svg>
				) : (
					<svg
						className='w-5 h-5'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
						/>
					</svg>
				)}
				<span className='hidden md:inline md:ml-2'>
					{theme === 'theme-light' ? 'Light' : 'Dark'} Mode
				</span>
			</button>
		</nav>
	);
};

export default Navbar;
