import Head from 'next/head';

const Index = () => (
	<div>
		<Head>
			<title>Homepage | Siabsish Mohanty</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<nav className='flex items-center justify-between py-4 px-8 border-b-2 border-gray-300'>
			<div className='w-32'>
				<a href='https://meetup.com' target='_blank'>
					<img
						src='https://www.meetup.com/mu_static/en-US/logo--script.004ada05.svg'
						height={46}
						alt='Meetup Logo'
					/>
				</a>
			</div>
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

export default Index;
