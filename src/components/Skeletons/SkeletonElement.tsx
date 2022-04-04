import * as React from 'react';

import './Skeleton.css'
import { SkeletonTypeVariants } from '../../types/OwnTypes';
 
const SkeletonElement: React.FunctionComponent<SkeletonTypeVariants> = (props) => {
    const classes : string = `skeleton ${props.variant} ${props.className ? props.className : ''}`

    return (
        <div className={classes}></div>
    );
}
 
export default SkeletonElement;