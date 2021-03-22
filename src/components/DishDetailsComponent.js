import  { useState } from 'react';
import { Col,Row,Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,  Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import JSONLindo from "./JSONLindo";
import { Control, LocalForm, Errors } from "react-redux-form";
 

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
    
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
};

const CommentForm =() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
	const handleSubmitComment = (values) => {
        toggleModal();
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is:" + JSON.stringify(values));
  };
  
  
	const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    
    return (
        <>
            <Button outline onClick={toggleModal}>
                <span className="fa fa-pencil fa-lg"></span> Submit Comment
            </Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}> Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm
                        onSubmit={(values) => handleSubmitComment(values)}
                    >
                        <Row className="form-group">
                            <Col xs={12}>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select
                                    model=".rating"
                                    className="form-control"
                                    name="rating"
                                    id="rating"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={12}>
                                <Label htmlFor="name">Your Name</Label>
                                <Control.text
                                    model=".name"
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15),
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: "Required",
                                        minLength:
                                            "Must be greater than 2 characters.",
                                        maxLength:
                                            "Must be 15 characters or less.",
                                    }}
                                ></Errors>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={12}>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea
                                    model=".comment"
                                    className="form-control"
                                    name="comment"
                                    id="comment"
                                    rows="6"
                                />
                            </Col>
                        </Row>
                        <Button
                            type="submit"
                            value="Submit"
                            className="btn bg-primary"
                        >
                            Login
                        </Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </>
    );

}

const RenderComments = ({comments}) => {
  if (comments != null) {
    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comments.map((comment) => {
                    return (
                        <li key={comment.id} className="">
                            <p>{comment.comment}</p>
                            <p>
                                {" "}
                                {comment.author} -{" "}
                                {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit",
                                }).format(new Date(Date.parse(comment.date)))}
                            </p>
                        </li>
                    );
                })}
            </ul>
            <CommentForm />
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
