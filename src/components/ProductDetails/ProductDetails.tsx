/* eslint-disable @typescript-eslint/no-empty-interface */
import * as React from 'react';

interface IProductDetailsProps {

}

const ProductDetails: React.FC<IProductDetailsProps> = () => {
  const [message, setMessage] = React.useState<string>('pososi');

  return (
    <div className="message">
      {message}
    </div>
  );
};

export default ProductDetails;
