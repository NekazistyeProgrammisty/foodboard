import * as React from 'react';

import './Skeleton.css';
import { SkeletonTypeVariants } from '../../types/PublicTypes';

const SkeletonElement: React.FunctionComponent<SkeletonTypeVariants> = ({
	className,
	variant
}) => {
	const classes = `skeleton ${variant} ${className || ''}`;

	return <div className={classes} />;
};

export default SkeletonElement;
