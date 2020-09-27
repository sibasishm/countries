import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import countryCodes from '../../data/countryCodes';

const capitalizeWord = str =>
	str[0].toUpperCase() +
	str
		.slice(1, str.length)
		.replace(/[A-Z]/g, letter => ` ${letter.toLowerCase()}`);

const arrayToString = arr => arr.map(({ name }) => name).join(', ');

export async function getServerSideProps({ query }) {
	const res = await fetch(
		`https://restcountries.eu/rest/v2/alpha/${query.country}`
	);
	const data = await res.json();

	return { props: { data } };
}

const Home = ({ data }) => {
	const { query } = useRouter();

	if (!data || data.status === 404) {
		return (
			<Layout title={countryCodes[query.country]}>
				<section className='p-4 md:p-8 lg:px-16'>
					<Link href='/'>
						<a className='w-32 flex items-center justify-center shadow rounded bg-secondary p-2 focus:outline-none focus:shadow-outline'>
							<svg
								className='w-4 h-4'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M10 19l-7-7m0 0l7-7m-7 7h18'
								/>
							</svg>
							<span>Back</span>
						</a>
					</Link>
				</section>
				<main className='mt-10 text-center'>
					<h2 className='mt-2 text-4xl font-bold'>Not Found!</h2>
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
	} = data;

	const paramSet1 = {
		region,
		subregion,
		currencies,
		languages,
	};

	const arrayParams = ['currencies', 'languages'];

	const paramSet2 = {
		capital,
		population,
		area,
		callingCodes,
	};

	return (
		<Layout title={countryCodes[query.country]}>
			<section className='p-4 md:p-8 lg:px-16'>
				<Link href='/'>
					<a className='w-32 flex items-center justify-center shadow rounded bg-secondary p-2 focus:outline-none focus:shadow-outline'>
						<svg
							className='w-4 h-4'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M10 19l-7-7m0 0l7-7m-7 7h18'
							/>
						</svg>
						<span className='ml-4'>Back</span>
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
								{Object.keys(paramSet1).map(param => (
									<li key={param} className='my-2'>
										<span className='font-semibold'>{`${capitalizeWord(
											param
										)}: `}</span>
										<span>
											{arrayParams.includes(param)
												? arrayToString(paramSet1[param])
												: paramSet1[param].toLocaleString() || 'NA'}
										</span>
									</li>
								))}
							</ul>
							<ul className='md:ml-4'>
								{Object.keys(paramSet2).map(param => (
									<li key={param} className='my-2'>
										<span className='font-semibold'>{`${capitalizeWord(
											param
										)}: `}</span>
										<span>
											{paramSet2[param]
												? paramSet2[param].toLocaleString()
												: 'NA'}
										</span>
									</li>
								))}
							</ul>
						</div>
						<span className='font-semibold'>Border Countries: </span>
						<ul className='flex flex-wrap'>
							{borders.length === 0
								? 'None'
								: borders.map(item => (
										<li key={item} className='m-3'>
											<Link href='/[country]' as={`/${countryCodes[item]}`}>
												<a className='shadow rounded bg-secondary p-2 px-4 focus:outline-none focus:shadow-outline'>
													{countryCodes[item]}
												</a>
											</Link>
										</li>
								  ))}
						</ul>
					</div>
				</main>
			</section>
		</Layout>
	);
};

export default Home;
