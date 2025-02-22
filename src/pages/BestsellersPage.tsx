
import { useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CardItems } from '../../components/CardItems';
import { Container } from '../../components/Container/Container';
import Icon from '../../components/Icon';
import Layout from '../../components/Layout';
import { Bestseller, FilterItemsSeed } from '../../seed/seed';


const BestsellersPage = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [showSorting, setShowSorting] = useState(false);

	return (
		<Layout>
			<Container>
				<Breadcrumbs currentPage="BestsellersPage" />
			</Container>
			<Container>
				<h1>BestsellersPage</h1>
				<div className="controls_wrap flex items-center justify-between relative mb-11.5">
					<div className="filter_btn text-xl text-[#434141]">
						<div className="flex items-center" onClick={() => setShowFilter(!showFilter)}>
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

					{showFilter && (
						<div className="filter absolute max-w-[300px] top-10 -left-10 bg-white px-10 py-2 shadow-lg">
							{FilterItemsSeed.map(item => (
								<div className="bodrer border-b-[1px] border-[#018ABE] mb-5">
									<h3>{item.title}</h3>
									{item.title.toLowerCase() === 'розмір' ? (
										<div className="filter_wrap_size flex gap-3 pb-6 flex-wrap">
											{item.params.map(param => (
												<button className="flex items-center">
													<span className="p-2.5 font-light rounded-sm transition duration-300 ease-in-out py-[3px] px-2.5 w-12 h-6 text-sm text-[#434141] font-normal leading-4.5 border border-[#C0C0C0] !border-[#018ABE]">
														{param.name}
													</span>
												</button>
											))}
										</div>
									) : (
										<div className="filter_wrap flex flex-col gap-1 pb-6">
											{item.params.map(param => (
												<label className="flex items-center">
													<input type="checkbox" className="w-5.5 h-6" />
													<span className="ml-3">{param.name}</span>
												</label>
											))}
										</div>
									)}
								</div>
							))}
							<div className="filter_btn flex flex-row items-center justify-between">
								<button
									className="text-lg py-2.5 px-1 leading-6 font-light text-[#434141] border-b-[1px] border-[#018ABE] "
									onClick={() => console.log('Clear filter')}
								>
									Clear all filters
								</button>
								<button
									className="text-lg py-2.5 px-7 leading-6 font-light text-[#434141] bg-[#018ABE] rounded-sm transition duration-300 ease-in-out"
									onClick={() => console.log('Apply filter')}
								>
									Apply
								</button>
							</div>
						</div>
					)}
					{showSorting && (
						<div className="sorting absolute w-[200px] top-10 -right-16 bg-white px-5 py-2 shadow-lg">
							<div className="sorting_wrap flex flex-col gap-2 items-start">
								<button onClick={() => console.log('Sort by Name')}>the lowest price</button>
								<button onClick={() => console.log('Sort by Name')}>the highest price</button>
								<button onClick={() => console.log('Sort by Name')}>bestsellers</button>
								<button onClick={() => console.log('Sort by Name')}>popularity</button>
								<button onClick={() => console.log('Sort by Name')}>novelty</button>
								<button onClick={() => console.log('Sort by Price')}>rating</button>
							</div>
						</div>
					)}
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
