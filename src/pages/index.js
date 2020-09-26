import Link from 'next/link';

import Layout from '../components/Layout';
import Searchbox from '../components/Searchbox';
import Select from '../components/Select';
import Card from '../components/Card';

export async function getServerSideProps() {
	const res = await fetch('https://restcountries.eu/rest/v2/all');
	const data = await res.json();

	return { props: { data } };
}

const Home = ({ data = [] }) => {
	return (
		<Layout>
			<section className='p-4 md:p-8 lg:px-16'>
				<div className='flex justify-between'>
					<Searchbox />
					<Select />
				</div>
				<main className='mt-12 grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{data.map(
						({ alpha3Code, name, flag, population, region, capital }) => (
							<Link key={alpha3Code} href='/[country]' as={`/${alpha3Code}`}>
								<a className='focus:outline-none focus:shadow-outline rounded'>
									<Card
										flag={flag}
										name={name}
										params={{ population, region, capital }}
									/>
								</a>
							</Link>
						)
					)}
				</main>
			</section>
		</Layout>
	);
};

export default Home;
