import * as React from 'react';

import './Shimmer.css'

interface ShimmerProps {
    
}
 
const Shimmer: React.FunctionComponent<ShimmerProps> = () => {
    return (
        <div className="shimmer-wrapper">
            <div className="shimmer">
            </div>
        </div>
    );
}
 
export default Shimmer;