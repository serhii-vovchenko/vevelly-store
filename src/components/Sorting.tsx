import React from 'react';

export const Sorting: React.FC = () => {
	return (
		<div className="sorting absolute w-[200px] z-10 top-10 -right-16 bg-white px-5 py-2 shadow-xl">
			<div className="sorting_wrap flex flex-col gap-2 items-start">
				<button onClick={() => console.log('Sort by Name')}>the lowest price</button>
				<button onClick={() => console.log('Sort by Name')}>the highest price</button>
				<button onClick={() => console.log('Sort by Name')}>bestsellers</button>
				<button onClick={() => console.log('Sort by Name')}>popularity</button>
				<button onClick={() => console.log('Sort by Name')}>novelty</button>
				<button onClick={() => console.log('Sort by Price')}>rating</button>
			</div>
		</div>
	);
};
