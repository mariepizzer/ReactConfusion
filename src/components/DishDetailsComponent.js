import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'


 
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
      const commentsList = comments.map((comment) => {
        return (
          <li key={comment.id} className="">
            <p>{comment.comment}</p>
            <p>
              {comment.author} -{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </li>
        );
      });
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">{commentsList}</ul>
        </div>
      );
    } else {
      <div></div>;
    }
  }
const DishDetails = ({dish}) => {
    return dish ? (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
                <RenderDish dish={dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
                <RenderComments comments={dish.comments}/>
                    
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    );
  }


export default DishDetails
