import Head from 'next/head';

import Navbar from './Navbar';

let defaultTheme = 'theme-light';

const Layout = ({ children, title }) => {
	if (process.browser) {
		defaultTheme = window.localStorage.getItem('theme') || 'theme-light';
	}
	const [theme, setTheme] = React.useState(defaultTheme);

	React.useEffect(() => {
		window.localStorage.setItem('theme', theme);
	}, [theme]);

	const handleThemeChange = (newTheme) => {
		setTheme(newTheme);
	};

	return (
		<>
			<Head>
				<title>{title || 'Home'}</title>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
			</Head>
			<div
				className={`${theme} min-h-screen antialiased font-body text-quaternary bg-primary`}
			>
				<Navbar theme={theme} handleThemeChange={handleThemeChange} />
				{children}
			</div>
		</>
	);
};

export default Layout;
