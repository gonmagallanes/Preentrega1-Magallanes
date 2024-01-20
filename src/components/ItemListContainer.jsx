import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import LoadingComponents from "./Loaders/LoadingComponents";


const ItemListContainer = ({ productsData }) => {
  

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px ",
        }}
      >
        {productsData.length <= 0 ? <LoadingComponents/> :
        productsData?.map((products) => {
          return (
            <Card key={products.id} style={{ width: "18rem" }}>
              <Link to={`/item/${products.id}`}>
                <Card.Img variant="top" src={products.thumbnail} />
              </Link>

              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>{products.description}</Card.Text>
                <div>{products.price}</div>
                <ItemCount/>
                
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
