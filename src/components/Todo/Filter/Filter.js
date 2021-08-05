import React from 'react';
import styles from './Filter.module.css'
import { connect } from 'react-redux';
import todosActions from '../../../redux/todos/todos-actions';

const Filter = ({ value, onChange }) => {
    return (
        <div className={styles.filter}>
            <label className={styles.labelForm}>
                Find todo
                <input
                    className={styles.inputFilter}
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    )

}

const mapStateToProps = state => ({
    value: state.todos.filter
})

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(todosActions.changeFilter(e.currentTarget.value)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);