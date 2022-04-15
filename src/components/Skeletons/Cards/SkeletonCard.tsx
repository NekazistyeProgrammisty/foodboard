import * as React from 'react';

import SkeletonElement from '../SkeletonElement';
import Shimmer from '../Shimmer';

const SkeletonCard: React.FunctionComponent = () => (
	<div className="skeleton-wrapper">
		<div className="card skeleton-card">
			<SkeletonElement className="avatar" variant="image" />
			<SkeletonElement className="card-title" variant="title" />
			<div className="lower-card-container">
				<SkeletonElement className="card-button" variant="button" />
				<SkeletonElement className="subtitle" variant="title" />
				<SkeletonElement
					className="card-button right-side-button"
					variant="button"
				/>
			</div>
		</div>
		<Shimmer />
	</div>
);

export default SkeletonCard;
