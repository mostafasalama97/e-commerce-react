import { Product } from "@components/ecommerce";
import { Container, Row, Col } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@store/hooks/hooks";
import { useEffect } from "react";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";


const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.productsSlice);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));


 

    // when unmount happen dispatch product clean up "make page empty"
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
        />

      </Loading>
    </Container>
  );
};

export default Products