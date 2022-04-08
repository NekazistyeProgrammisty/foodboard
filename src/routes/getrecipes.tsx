import * as React from 'react';
import { footerSections } from '../App.constants';
import CardHolder from '../components/CardHolder/CardHolder';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';


interface RecipesListPageProps {

}

const RecipesListPage: React.FunctionComponent<RecipesListPageProps> = () => {
    return (
        <>
            <Header />
            <Container content={<CardHolder />}/>
            <Footer
                sections={footerSections}
            />
        </>
    );
}

export default RecipesListPage;