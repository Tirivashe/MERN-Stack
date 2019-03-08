import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import {getItems, deleteItem} from '../actions/items-actions'
import PropTypes from 'prop-types'

class ShoppingList extends Component{

    componentDidMount(){
        this.props.getItems();
    }

    handleDelete = id => {
        this.props.deleteItem(id)
    }

    render(){
        const { items } =  this.props.item
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        { items.map(({_id, name}) =>(
                           <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="removeBtn" color="danger" size="sm" onClick={this.handleDelete.bind(this, _id)}>&times;</Button>
                                    {name}
                                </ListGroupItem>
                           </CSSTransition> 
                        )) }
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

//this functions maps/ turns the state from items-reducer.js into a usable component prop inside this file
const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList)