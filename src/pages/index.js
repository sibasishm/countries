import { useState, useEffect } from 'react';
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
	const [serachTerm, setSearchTerm] = useState('');
	const [region, setRegion] = useState('');
	const [filteredData, setFilteredData] = useState(data);

	const handleSearchTermChange = e =>
		setSearchTerm(e.target.value.toLowerCase());
	const handleRegionChange = val => setRegion(val);

	useEffect(() => {
		setFilteredData(
			data.filter(({ name }) => name.toLowerCase().includes(serachTerm))
		);
	}, [serachTerm]);

	return (
		<Layout>
			<section className='p-4 md:p-8 lg:px-16'>
				<div className='flex justify-between'>
					<Searchbox value={serachTerm} onChange={handleSearchTermChange} />
					<Select value={region} onChange={handleRegionChange} />
				</div>
				<main className='mt-12 grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{filteredData.map(
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
