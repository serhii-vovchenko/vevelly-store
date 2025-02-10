import { NavLink } from 'react-router-dom';
import { About } from '../../components/Home/About';
import { Bestsellers } from '../../components/Home/Bestsellers';
import { FullPromo } from '../../components/Home/FullPromo';
import { Gift } from '../../components/Home/Gift';
import { NewProducts } from '../../components/Home/New';
import { Subscribe } from '../../components/Home/Subscribe';
import { Watch } from '../../components/Home/Watch';
import Layout from '../../components/Layout/Layout';
import s from './HomePage.module.css';

import { Baner } from '../../seed/seed'
import { MySlider } from '../../components/Home/Slider'

const HomePage = () => {
	return (
		<Layout>
			<MySlider banner={Baner}	/>
			<NewProducts />
			<FullPromo />
			<Bestsellers />
			<Gift />
			<Watch />
			<About />
			<Subscribe />
		</Layout>
	);
};

export default HomePage;
