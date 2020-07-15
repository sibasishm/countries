import Head from 'next/head';
import Navbar from '../components/Navbar';
import Searchbox from '../components/Searchbox';
import Select from '../components/Select';

const Home = () => (
	<div>
		<Head>
			<title>Home</title>
			<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
		</Head>
		<Navbar />
		<section className='p-4 md:p-8 lg:px-16'>
			<div className='flex justify-between'>
				<Searchbox />
				<Select />
			</div>
			<main></main>
		</section>
	</div>
);

export default Home;
