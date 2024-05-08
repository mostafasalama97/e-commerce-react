import { Product } from "@components/ecommerce";
import { Container, Row, Col } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@store/hooks/hooks";
import { useEffect } from "react";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import { IProduct } from "@customeTypes/sharedTypes";


const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.productsSlice);
  const cartItems = useAppSelector((state) => state.cartSlice.items)

  const productsFullInfo = records.map((el: IProduct) => ({
    ...el,
    quantity: el.id !== undefined ? (cartItems[el.id] || 0) : 0 // Ensure id is not undefined before using it as a key
  }))
  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));




    // when unmount happen dispatch product clean up "make page empty"
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Heading><span className="text-capitalize">{params.prefix} </span>Products</Heading>
      <Loading status={loading} error={error}>
        <GridList
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />

      </Loading>

    </Container>
  );
};

export default Products