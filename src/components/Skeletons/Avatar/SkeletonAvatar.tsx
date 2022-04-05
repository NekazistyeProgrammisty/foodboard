import * as React from 'react';

import Shimmer from '../Shimmer';
import SkeletonElement from '../SkeletonElement';

interface SkeletonAvatarProps{
    
}
 
const SkeletonAvatar: React.FunctionComponent<SkeletonAvatarProps> = (props) => {
    return (
        <div className="skeleton-wrapper avatar" style={{width: '100%'}}>
            <SkeletonElement variant='image' />
            <Shimmer />
        </div>
    );
}
 
export default SkeletonAvatar;