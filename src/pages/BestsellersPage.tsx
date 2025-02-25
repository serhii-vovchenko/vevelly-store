import clsx from 'clsx';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { CardItems } from '../components/CardItems';
import { Container } from '../components/Container/Container';
import { Filter } from '../components/Filter';
import Icon from '../components/Icon';
import Layout from '../components/Layout/Layout';
import { Bestseller } from '../seed/seed';
import { Sorting } from '../components/Sorting';

const BestsellersPage = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [showSorting, setShowSorting] = useState(false);

	const toggleFilter = () => {
		setShowFilter(!showFilter);
	};

	return (
		<Layout>
			<Container>
				<Breadcrumbs className="mb-11" />
			</Container>
			<Container>
				<h1>BestsellersPage</h1>
				<div className="controls_wrap flex items-center justify-between relative mt-11.5">
					<div className="filter_btn text-xl text-[#434141]">
						<div className="flex items-center" onClick={toggleFilter}>
							<Icon className="mr-2" name="filter" width={18} height={18} />
							Filter
						</div>
					</div>
					<div className="sort_btn text-xl text-[#434141]">
						<div className="flex items-center" onClick={() => setShowSorting(!showSorting)}>
							Sort
							<Icon className="ml-2" name="down" width={18} height={18} />
						</div>
					</div>

					<div
						className={clsx(
							'absolute top-10 -left-5 z-50 transform transition-transform duration-500',
							showFilter ? 'translate-x-0' : '-translate-x-full'
						)}
					>
						<Filter onClose={toggleFilter} />
					</div>
					{showFilter && (
						<div className="fixed inset-0 bg-black/10 z-40" onClick={toggleFilter}></div>
					)}
					{showSorting && <Sorting />}
				</div>
			</Container>
			<Container>
				<div className="products_wrap mb-18.5">
					<CardItems cards={Bestseller} />
				</div>
				<div className="pagination mb-40">
					<div className="pagination_wrap flex justify-center items-center gap-4">
						<button className="text-lg text-[#434141] font-light leading-6">
							<Icon name="down" width={18} height={9} color="#C0C0C0" className=" rotate-90" />
						</button>
						<button className="!text-lg text-[#018ABE] font-light leading-6">1</button>
						<button className="!text-lg text-[#434141] font-light leading-6">2</button>
						<button className="!text-lg text-[#434141] font-light leading-6">.</button>
						<button className="!text-lg text-[#434141] font-light leading-6">.</button>
						<button className="!text-lg text-[#434141] font-light leading-6">8</button>
						<button className="!text-lg text-[#434141] font-light leading-6">
							<Icon
								name="down"
								width={18}
								height={9}
								color="#018ABE"
								className="-rotate-90 fill-[#018ABE]"
							/>
						</button>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default BestsellersPage;
