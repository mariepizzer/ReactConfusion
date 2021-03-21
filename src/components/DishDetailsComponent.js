import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import JSONLindo from "./JSONLindo";
 
const RenderDish = ({ dish }) => {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText> {dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
}

const RenderComments = ({comments}) => {
  if (comments != null) {
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {
            
            comments.map((comment) => {
              return (
                  <li key={comment.id} className="">
                    <p>{comment.comment}</p>
                    <p> {comment.author} - {" "} {new Intl.DateTimeFormat("en-US", {year: "numeric",month: "short",day: "2-digit"}).format(new Date(Date.parse(comment.date)))}</p>
                  </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

const DishDetails = ({ dish, comments }) => {
    return dish ? (
      <div className="container">
        <div className="row mt-3">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12 mt-1">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={comments} />
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    );
  }


export default DishDetails
