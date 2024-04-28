import { Button } from "react-bootstrap";
import style from "./style.module.css";
import { IProduct } from "@customeTypes/sharedTypes";
const { product, productImg } = style;

const Product = (props : IProduct) => {
  const {img , title , price} = props
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src={img}
          alt={title}
        />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;