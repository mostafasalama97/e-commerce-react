// Import the CSS module for styles specific to this component.
import style from './style.module.css'

// Import an SVG asset as a React component.
import Logo from "@assets/svg/cart.svg?react";

// Custom hook for accessing Redux state.
import { useAppSelector } from '@store/hooks/hooks'

// Selector to get the total quantity of items in the cart from the Redux store.
import { getCartTotalQuantitySelector } from '@store/selectors'

// Import useEffect and useState hooks from React.
import { useEffect, useState } from 'react';

// Destructure specific CSS classes from the imported styles.
const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } = style

// Define a React functional component named 'HeaderBascet'.
const HeaderBascet = () => {
  // This state stores the total quantity of items in the cart and is updated via the Redux selector.
  const totalQuantity: any = useAppSelector(getCartTotalQuantitySelector);

  // State to handle animation trigger which is boolean.
  const [isAnimate, setIsAnimate] = useState(false);

  // Combine CSS classes dynamically based on the isAnimate state.
  const quantityStyle = `${basketQuantity} ${isAnimate ? pumpCartQuantity : ""}`;

  // Effect hook to handle the animation of the cart icon when the totalQuantity changes.
  useEffect(() => {
    // If totalQuantity is undefined or null, do nothing.
    if (!totalQuantity) {
      return;
    }

    // Set animation state to true when the quantity changes.
    setIsAnimate(true);

    // Set a timeout to remove the animation effect after 300 milliseconds.
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    // Cleanup function to clear the timeout if the component unmounts or the quantity changes again before the timeout completes.
    return () => clearTimeout(debounce);
  }, [totalQuantity]); // Dependency array includes totalQuantity to trigger effect when it changes.

  // Render the component JSX.
  return (
    <div className={basketContainer}>
      <div className={basketCart}>
        {/* Logo is the SVG cart icon, with an accessibility title. */}
        <Logo title="basket icon" />
        {/* Display the total quantity with dynamic styling depending on the animation state. */}
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
      <h3>Cart</h3>
    </div>
  )
}

// Export the component for use in other parts of the application.
export default HeaderBascet
