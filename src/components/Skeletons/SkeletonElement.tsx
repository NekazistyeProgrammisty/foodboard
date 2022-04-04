import * as React from 'react';

import './Skeleton.css'
import { SkeletonTypeVariants } from '../../types/OwnTypes';
 
const SkeletonElement: React.FunctionComponent<SkeletonTypeVariants> = (props) => {
    const classes : string = `skeleton + ${props.variant}`

    return (
        <div className={classes}></div>
    );
}
 
export default SkeletonElement;