import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { addProduct, removeProduct } from '../redux/slices/UserProductsSlice';

export const AuthPage: React.FC = () => {
  const { products, loading, error } = useAppSelector((state) => state.userProducts);
  const dispatch = useAppDispatch();
  return (
    <>
      {JSON.stringify(products)}
      <div>
        loading:
        {loading}
      </div>
      <div>
        error:
        {error}
      </div>

      <form>
        <button
          type="button"
          onClick={
            () => dispatch(addProduct({
              title: 'Lavandos', count: 1, expirationDays: 2
            }))
          }
        >
          Add
        </button>
        <button
          type="button"
          onClick={
            () => dispatch(removeProduct(0))
          }
        >
          Remove
        </button>
      </form>
    </>
  );
};
