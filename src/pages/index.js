import Head from 'next/head';
import Link from 'next/link';

const Home = () => (
	<div>
		<Head>
			<title>Home</title>
			<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
		</Head>
		<nav className='flex items-center justify-between py-4 px-8 border-b-2 border-gray-300 bg-white'>
			<Link href='/'>
				<a className='font-bold tracking-wide text-2xl'>
					Where in the world?
				</a>
			</Link>
			<div className='flex'>
				<div className='text-blue-600 font-bold text-center'>
					<span>Start a new group</span>
					<br />
					<span>50% off</span>
				</div>
				<div className='border-r border-gray-300 mx-4'></div>
				<div className='flex items-center'>
					<ul className='flex items-center space-x-3 text-center text-gray-700 text-sm'>
						<li>Explore</li>
						<li>Messages</li>
						<li>Notifications</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
);

export default Home;
