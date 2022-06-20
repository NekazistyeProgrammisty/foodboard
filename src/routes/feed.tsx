import * as React from 'react';
import Header from '../components/Header/Header';

const Feed: React.FunctionComponent = () => (
	<>
		<Header title="Лента" />
		<main className="container" style={{ color: '#bbb' }}>
			Здесь ничего нет, но скоро будет!!!
		</main>
	</>
);

export default Feed;
