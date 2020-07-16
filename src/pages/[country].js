import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '../components/Navbar';
import Card from '../components/Card';

export async function getServerSideProps({ query }) {
	const res = await fetch(
		`https://restcountries.eu/rest/v2/name/${query.country}`
	);
	const data = await res.json();

	return { props: { data } };
}

const Home = ({ data = [] }) => {
	const { query } = useRouter();
	return (
		<div>
			<Head>
				<title>{query.country}</title>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
			</Head>
			<Navbar />
			<section className='p-4 md:p-8 lg:px-16'>
				<main className='mt-12 grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{data.map(
						({
							alpha3Code,
							name,
							flag,
							population,
							region,
							capital,
						}) => (
							<Card
								key={alpha3Code}
								flag={flag}
								name={name}
								params={{ population, region, capital }}
							/>
						)
					)}
				</main>
			</section>
		</div>
	);
};

export default Home;
