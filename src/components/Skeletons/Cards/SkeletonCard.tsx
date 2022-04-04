import * as React from 'react';

import SkeletonElement from '../SkeletonElement';


interface SkeletonCardProps {
    
}
 
const SkeletonCard: React.FunctionComponent<SkeletonCardProps> = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="card skeleton-card">
                <SkeletonElement variant='image' />
                <SkeletonElement variant='title' />
                <SkeletonElement variant='text' />
                <div className="lower-container">
                    <SkeletonElement variant='button' />
                    <SkeletonElement variant='title' />
                    <SkeletonElement className='secondbutton' variant='button' />
                </div>
            </div>
        </div>
    );
}

export default SkeletonCard;