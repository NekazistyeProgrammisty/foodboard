import * as React from 'react';

import Shimmer from '../Shimmer';
import SkeletonElement from '../SkeletonElement';

const style = {
	borderRadius: '10px 10px 4px 4px'
};

const SkeletonAvatar: React.FunctionComponent = () => (
	<div className="skeleton-wrapper avatar" style={style}>
		<SkeletonElement className="fullheight fullwidth" variant="image" />
		<Shimmer />
	</div>
);

export default SkeletonAvatar;
