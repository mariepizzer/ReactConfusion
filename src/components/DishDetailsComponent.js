import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'


class DishDetails extends Component{
    constructor(props) {
        super(props);

        this.state = {
            dish: this.props.dish
        }
    }

    renderDish(dish) {
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
            return (
                <div></div>
            )
        }
    }

    renderComments(comments) {
        if(comments != null ){
            const commentsList =  this.props.dish.comments.map((comment) => {

            return <li key={comment.id} className=''>
                    <p>{comment.comment}</p>
                    <p>{comment.author} - {comment.date}</p>
                </li>
        });
        return <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {commentsList}
            </ul>
            </div>
        }
        else{ <div></div> }
    }

    render() {
        return (
            this.props.dish ?
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}  
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
                :
                <div></div>
        )
    }
}

export default DishDetails
