import * as React from 'react';
import SkeletonAvatar from '../Skeletons/Avatar/SkeletonAvatar';

interface CardAvatarProps extends React.ImgHTMLAttributes<HTMLElement> {
    placeholderElement? : React.ReactNode

}
 
const CardAvatar: React.FunctionComponent<CardAvatarProps> = ({placeholderElement, src, ...props}) => {
    const [ready, setReady] = React.useState(false)
    
    const onLoad = React.useCallback(() => {
        setReady(true);
    }, [])

    React.useEffect(() => {
        const img = new Image();
        img.src = src as string
        img.addEventListener('load', onLoad);

        return () => {
            img.removeEventListener('load', onLoad);
        }

    }, [src, onLoad])

    return (
        

        ready ? <img className='avatar' {...props} alt='Фотография блюда' src = {src}/> : <SkeletonAvatar/>
    );
}
 
export default CardAvatar;