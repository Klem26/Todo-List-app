
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../../components/Container';


import TodoList from '../../components/Todo/TodoList';
import TodoEditor from '../../components/Todo/TodoEditor/TodoEditor';
import Filter from '../../components/Todo/Filter/Filter';
import Modal from '../../components/Modal';
import IconButton from '../../components/IconButton';
import TodoCount from '../../components/TodoCount/';
import { ReactComponent as AddIcon } from '../../components/icons/add.svg';

class TodoView extends Component {

    state = {
        showModal: false,
    }


    toggleModal = () => {
        this.setState(state => ({
            showModal: !state.showModal,
        }))
    }



    render() {

        const { showModal } = this.state;


        return (

            <Container>

                <Filter />

                <IconButton aria-label="Добавить todo" onClick={this.toggleModal}>
                    <AddIcon width="40" height="40" fill="#fff" />
                </IconButton>
                <TodoCount />
                {showModal && (< Modal onClose={this.toggleModal}>
                    <TodoEditor onClick={this.toggleModal} />
                    <button className="btn" type="button" onClick={this.toggleModal}>Close</button>
                </Modal>)}

                <TodoList />

            </Container>
        );
    }
}


export default connect()(TodoView);