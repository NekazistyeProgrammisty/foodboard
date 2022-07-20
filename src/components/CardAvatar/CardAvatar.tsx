import * as React from 'react';
import SkeletonAvatar from '../Skeletons/Avatar/SkeletonAvatar';
import './CardAvatar.css';

interface CardAvatarProps extends React.ImgHTMLAttributes<HTMLElement> {
  placeholderElement?: React.ReactNode;
}

const CardAvatar: React.FunctionComponent<CardAvatarProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  placeholderElement,
  src,
  ...props
}) => {
  const [ready, setReady] = React.useState(false);

  const onLoad = React.useCallback(() => {
    setReady(true);
  }, []);

  React.useEffect(() => {
    const img = new Image();
    img.src = src as string;
    img.addEventListener('load', onLoad);

    return () => {
      img.removeEventListener('load', onLoad);
    };
  }, [src, onLoad]);

  return ready ? (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <img className="avatar" {...props} alt="Фотография блюда" src={src} />
  ) : (
    <SkeletonAvatar />
  );
};

export default CardAvatar;
