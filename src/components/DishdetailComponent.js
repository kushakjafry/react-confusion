import React, { Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody, CardTitle, ListGroup,ListGroupItemText,ListGroupItem } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props){
        super(props)
    }

    render(){
        if(this.props.dish){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-md-5 m-1">
                            <Card>
                            <CardImg width="inherit" src={this.props.dish.image} alt={this.props.dish.name}/>
                            <CardBody>
                                <CardTitle>
                                    {this.props.dish.name}
                                </CardTitle>
                                <CardText>
                                    {this.props.dish.description}
                                </CardText>
                            </CardBody>
                            </Card>
                        </div> 
                        <div className="col col-12 col-md-5">
                            <Card>
                                <ListGroup>
                                    <h2>Comments</h2>
                                    <hr/>
                                    {this.props.dish.comments.map(comment => (
                                        <ListGroupItem key={comment.id}>
                                        <ListGroupItemText>
                                            {comment.comment}<br/>
                                            {comment.rating}<br/>
                                            {comment.author}  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                        </ListGroupItemText>
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }else{
            return(
                <div></div>
            )
        }
    }

}

export default Dishdetail;