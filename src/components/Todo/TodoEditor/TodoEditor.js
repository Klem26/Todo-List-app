import React, { Component } from 'react';
import { connect } from 'react-redux';
import todosActions from '../../../redux/todos/todos-actions';

import styles from './TodoEditor.module.css'

class TodoEditor extends Component {

    state = {
        message: '',

    }

    handeleChange = e => {
        this.setState({ message: e.currentTarget.value })

    }
    handeleSubmit = e => {
        e.preventDefault();

        if (this.state.message !== '') {
            this.props.onSubmit(this.state.message)
            this.props.onClick();
            this.setState({ message: '' })
            return;
        }

        alert('Add todo');
    }


    render() {
        return (
            <div>
                <form className={styles.TodoEditor}
                    onSubmit={this.handeleSubmit}>
                    <textarea
                        placeholder="Enter smth.."
                        rows={3}
                        type="text"
                        maxLength="25"
                        className={styles.TodoEditor__textarea}
                        value={this.state.message}
                        onChange={this.handeleChange}
                    ></textarea>
                    <button
                        className={styles.TodoEditor__button}
                        type="submit"

                    > Add todo</button>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: text => dispatch(todosActions.addTodo(text))
    }

}

export default connect(null, mapDispatchToProps)(TodoEditor);