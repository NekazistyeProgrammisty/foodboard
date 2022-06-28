import * as React from 'react';

import './Footer.css';
import FooterElement from '../FooterElement/FooterElement';
import { ReactComponent as Heart } from '../../assets/images/footer/Heart.svg';
import { ReactComponent as Products } from '../../assets/images/footer/Products.svg';
import { ReactComponent as RecipeBook } from '../../assets/images/footer/RecipeBook.svg';
import { ReactComponent as Sparkles } from '../../assets/images/footer/Sparkles.svg';
import { ReactComponent as User } from '../../assets/images/footer/User.svg';

interface IFooterProps {
	sections: string[];
}

const Footer: React.FC<IFooterProps> = ({ sections }) => (
	<footer>
		<FooterElement text={sections[0]}>
			<Sparkles />
		</FooterElement>
		<FooterElement text={sections[1]}>
			<Products />
		</FooterElement>
		<FooterElement text={sections[2]}>
			<RecipeBook />
		</FooterElement>
		<FooterElement text={sections[3]}>
			<User />
		</FooterElement>
		<FooterElement text={sections[4]}>
			<Heart />
		</FooterElement>
	</footer>
);

export default Footer;
