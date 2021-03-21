import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const RenderCard = ({ item }) => {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name} </CardTitle>
        {item.designation && <CardSubtitle>{item.designation}</CardSubtitle>}
        <CardText>{ item.description }</CardText>
      </CardBody>
    </Card>
  );
}

const Home = ({ dish, promotion, leader }) => {
  
  return (
    <div className="container">
      <div class="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={dish} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leader} />
        </div>
      </div>
    </div>
  );
};

export default Home;
