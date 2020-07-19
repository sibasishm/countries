import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import countryCodes from '../../data/countryCodes';

const capitalizeWord = (str) =>
	str[0].toUpperCase() +
	str
		.slice(1, str.length)
		.replace(/[A-Z]/g, (letter) => ` ${letter.toLowerCase()}`);

const arrayToString = (arr) => arr.map(({ name }) => name).join(', ');

export async function getServerSideProps({ query }) {
	const res = await fetch(
		`https://restcountries.eu/rest/v2/alpha/${query.country}`
	);
	const data = await res.json();

	return { props: { data } };
}

const Home = ({ data }) => {
	const { query } = useRouter();
	console.log(data);

	if (data.length === 0) {
		return (
			<Layout title={countryCodes[query.country]}>
				<section className='p-4 md:p-8 lg:px-16 transition-colors ease-in-out delay-200'>
					<Link href='/'>
						<a className='w-32 flex items-center justify-center shadow rounded bg-secondary p-2'>
							<img
								className='h-4 inline-block mr-4'
								src='/arrow-back-outline.svg'
								alt='back'
							/>
							<span>Back</span>
						</a>
					</Link>
				</section>
				<main className='mt-10'>
					<h2 className='mt-2 text-4xl font-bold'>{`${name} (${nativeName})`}</h2>
				</main>
			</Layout>
		);
	}

	const {
		flag,
		name,
		nativeName,
		area,
		borders,
		callingCodes,
		capital,
		currencies,
		languages,
		population,
		region,
		subregion,
		timezones,
	} = data[0];

	const paramSet1 = {
		capital,
		region,
		subregion,
		currencies,
		languages,
	};

	const arrayParams = ['currencies', 'languages'];

	const paramSet2 = {
		population,
		area,
		timezones,
		callingCodes,
	};

	return (
		<Layout title={countryCodes[query.country]}>
			<section className='p-4 md:p-8 lg:px-16 transition-colors ease-in-out delay-200'>
				<Link href='/'>
					<a className='w-32 flex items-center justify-center shadow rounded bg-secondary p-2'>
						<img
							className='h-4 inline-block mr-4'
							src='/arrow-back-outline.svg'
							alt='back'
						/>
						<span>Back</span>
					</a>
				</Link>
				<main className='mt-10 flex flex-col lg:flex-row justify-between items-center'>
					<div className='lg:w-2/5 lg:pr-6'>
						<img src={flag} alt={`${name} flag`} />
					</div>
					<div className='mt-6 lg:m-0 lg:w-3/5 px-16 tracking-wide'>
						<h2 className='mt-2 text-4xl font-bold'>{`${name} (${nativeName})`}</h2>
						<div className='flex flex-col md:flex-row mt-4 justify-between'>
							<ul className='md:mr-4'>
								{Object.keys(paramSet1).map((param) => (
									<li key={param} className='my-2'>
										<span className='font-semibold'>{`${capitalizeWord(
											param
										)}: `}</span>
										<span>
											{arrayParams.includes(param)
												? arrayToString(
														paramSet1[param]
												  )
												: paramSet1[
														param
												  ].toLocaleString() || 'NA'}
										</span>
									</li>
								))}
							</ul>
							<ul className='md:ml-4'>
								{Object.keys(paramSet2).map((param) => (
									<li key={param} className='my-2'>
										<span className='font-semibold'>{`${capitalizeWord(
											param
										)}: `}</span>
										<span>
											{paramSet2[
												param
											].toLocaleString() || 'NA'}
										</span>
									</li>
								))}
							</ul>
						</div>
						<ul className='flex items-center flex-wrap mt-4'>
							<li className='font-semibold'>
								Border Countries:{' '}
							</li>
							{borders.map((item) => (
								<Link
									key={item}
									href='/[country]'
									as={`/${countryCodes[item]}`}
								>
									<a>
										<li className='m-1 mx-3 shadow rounded bg-secondary p-2 px-4'>
											{countryCodes[item]}
										</li>
									</a>
								</Link>
							))}
						</ul>
					</div>
				</main>
			</section>
		</Layout>
	);
};

export default Home;
