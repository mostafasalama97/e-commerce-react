// Importing required components and styles
import { Button, Spinner } from "react-bootstrap";
import style from "./style.module.css";
import { IProduct } from "@customeTypes/sharedTypes";
import { useAppDispatch } from "@store/hooks/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { useEffect, useState } from "react";

// Extracting CSS class names from the styles module
const { product, productImg, maximumNotice } = style;

// Define a React functional component that accepts IProduct properties
const Product = (props: IProduct) => {
  // Destructuring props to extract product details
  const { id, title, price, img, max, quantity } = props;

  // Hook to dispatch actions to the Redux store
  const dispatch = useAppDispatch();

  // State to manage the button's disabled status
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  // Calculate the remaining quantity of the product that can be added to the cart
  const currentRemainingQuantity = max as number - (quantity ?? 0);  // Use nullish coalescing to default quantity to 0 if undefined

  // Determine if the maximum quantity has been reached
  const quantityReachedToMax = currentRemainingQuantity <= 0;

  // Effect hook to handle the button's disabled state
  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }

    // Temporarily disable button to prevent rapid clicks and then re-enable it
    setIsBtnDisabled(true);

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    // Cleanup function to clear the timeout
    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  // Event handler for adding an item to the cart
  const addToCartHandler = () => {
    dispatch(addToCart(id));  // Dispatch action to add the product to the cart
    setIsBtnDisabled(true);   // Disable button after adding to prevent multiple clicks
  };

  // JSX to render the product details
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} /> {/* Product image */}
      </div>
      <h2>{title}</h2> {/* Product title */}
      <h3>{parseFloat(price).toFixed(2)} EGP</h3> {/* Product price formatted to two decimal places */}
      <p className={maximumNotice}>
        {/* Display message based on whether the max quantity is reached */}
        {quantityReachedToMax
          ? "You reach to the limit"
          : `You can add ${currentRemainingQuantity} item(s)`}
      </p>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
        disabled={isBtnDisabled || quantityReachedToMax} // Disable button if max quantity reached or button is disabled
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" /> Loading... {/* Show loading spinner when button is disabled */}
          </>
        ) : (
          "Add to cart" // Button label
        )}
      </Button>
    </div>
  );
};

export default Product; // Export the component
