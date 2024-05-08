import { Category } from "@components/ecommerce";
import { Container, Row, Col } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "@store/hooks/hooks";
import { actGetCategories } from "@store/catogries/categoriesSllice";
import { useEffect } from "react"
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";

const Categoriez = () => {
  const dispatch = useAppDispatch()
  const { loading, error, records } = useAppSelector((state) => state.categoriesSllice)

  // we need when application loaded it start to fire the dispatch
  useEffect(() => {
    if (!records.length)
      dispatch(actGetCategories())
  }, [dispatch , records])

  // this part i repeat it on page product
  // the only difference i render component product instead of category
  // the rule said donnot repeat your self "DRY"
  // compose the component === loading component handller
  // to solve this proble i will use render props pattern "it is callBack but it invoked while looping"

  return (
    // i need to wrap the category component with loading this mean i will pass to loading component children
    <Container>
      <Heading>Categories</Heading>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />

      </Loading>
    </Container>

  )
}

export default Categoriez