import * as React from 'react';

import SkeletonElement from '../SkeletonElement';
import Shimmer from '../Shimmer';


interface SkeletonCardProps {
    
}
 
const SkeletonCard: React.FunctionComponent<SkeletonCardProps> = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="card skeleton-card">
                <SkeletonElement className='avatar' variant='image' />
                <SkeletonElement className='card-title' variant='title' />
                <div className="lower-container">
                    <SkeletonElement className='cardbutton' variant='button' />
                    <SkeletonElement className='subtitle' variant='title'/>
                    <SkeletonElement className='cardbutton secondbutton' variant='button' />
                </div>
            </div>
            <Shimmer />
        </div>
    );
}

export default SkeletonCard;