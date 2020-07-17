import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Navbar from '../components/Navbar';
import Card from '../components/Card';

export async function getServerSideProps({ query }) {
	const res = await fetch(
		`https://restcountries.eu/rest/v2/name/${query.country}?fullText=true`
	);
	const data = await res.json();

	return { props: { data } };
}

const Home = ({ data }) => {
	console.log(data[0]);
	const { query } = useRouter();
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
	return (
		<>
			<Head>
				<title>{query.country}</title>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
			</Head>
			<Navbar />
			<section className='p-4 md:p-8 lg:px-16'>
				<Link href='/'>
					<a className='w-32 flex items-center justify-center shadow rounded bg-white p-2'>
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
					<div className='mt-6 lg:m-0 lg:w-3/5 px-16 text-center lg:text-left'>
						<h2 className='mt-2 text-3xl font-bold'>{`${name} (${nativeName})`}</h2>
						<div className='flex flex-col md:flex-row mt-4 justify-between'>
							<ul className='md:mr-4'>
								<li>
									<span className='font-semibold'>
										Area:{' '}
									</span>
									<span>{area}</span>
								</li>
								<li>
									<span className='font-semibold'>
										Capital:{' '}
									</span>
									<span>{capital}</span>
								</li>
								<li>
									<span className='font-semibold'>
										Region:{' '}
									</span>
									<span>{region}</span>
								</li>
								<li>
									<span className='font-semibold'>
										Subregion:{' '}
									</span>
									<span>{subregion}</span>
								</li>
							</ul>
							<ul className='md:ml-4'>
								<li>
									<span className='font-semibold'>
										Timezones:{' '}
									</span>
									<span>{timezones}</span>
								</li>
								<li>
									<span className='font-semibold'>
										Calling Codes:{' '}
									</span>
									<span>{callingCodes}</span>
								</li>
								<li>
									<span className='font-semibold'>
										Population:{' '}
									</span>
									<span>{population}</span>
								</li>
								<li>
									<span className='font-semibold'>
										Native Name:{' '}
									</span>
									<span>{nativeName}</span>
								</li>
							</ul>
						</div>
					</div>
				</main>
			</section>
		</>
	);
};

export default Home;
