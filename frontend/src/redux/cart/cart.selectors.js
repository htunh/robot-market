import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectErrorMesg = createSelector(
  [selectCart],
  (cart) => cart.errorMesg
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      (accumalatedQuantity + cartItem.quantity * cartItem.price).toFixed(2),
    0
  )
);
