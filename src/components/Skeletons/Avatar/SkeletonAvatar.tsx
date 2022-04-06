import * as React from 'react';

import Shimmer from '../Shimmer';
import SkeletonElement from '../SkeletonElement';

interface SkeletonAvatarProps{
    
}
 
const SkeletonAvatar: React.FunctionComponent<SkeletonAvatarProps> = () => {
    return (
        <div className="skeleton-wrapper avatar" style={{width: '94%', height: '50%'}}>
            <SkeletonElement className='fullheight fullwidth' variant='image' />
            <Shimmer />
        </div>
    );
}
 
export default SkeletonAvatar;