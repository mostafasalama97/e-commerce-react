import { TGridListType } from "@customeTypes/sharedTypes"
import { Col, Row } from "react-bootstrap";

const GridList = <T,>(props: TGridListType<T>) => {
  const { records, renderItem } = props;

  const categoriesList = records.length > 0 ? records.map((record) =>
    <Col
      xs={6}
      md={3}
      key={record.id}
      className="d-flex justify-content-center mb-5 mt-2">
      {renderItem(record)}
    </Col>
  ) : "The are No Categories"

  return (
    <div> <Row>
      {categoriesList}
    </Row></div>
  )
}

export default GridList