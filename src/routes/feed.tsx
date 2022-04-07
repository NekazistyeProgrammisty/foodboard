import * as React from 'react';
import { footerSections } from '../App.constants';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

interface FeedProps {
    
}
 
const Feed: React.FunctionComponent<FeedProps> = () => {
    return (
        <>
            <Header />
                <main className='container' style={{color: '#bbb'}}>
                    Здесь ничего нет, но скоро будет!!!
                </main>
            <Footer sections={footerSections}/>
        </>
    );
}
 
export default Feed;