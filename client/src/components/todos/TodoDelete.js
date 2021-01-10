import React from 'react';
import Modal from '../Modal';
import history from '../../history'; 
import { connect } from 'react-redux';
import { fetchTodo, deleteTodo } from '../../actions';
import { Link } from 'react-router-dom';


class TodoDelete extends React.Component {

    componentDidMount() {
        this.props.fetchTodo(this.props.match.params.id);
    }

    renderActions() {

        const {id} = this.props.match.params;

        return (
            <React.Fragment>
            <button onClick={() => this.props.deleteTodo(id)} className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.todo) {
            return 'Are you sure you want to delete this todo?'
        }
        return `Are you sure want to delete this todo: ${this.props.todo.title}`
    }

    render() {
            return (
                    <Modal title="Delete Todo"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                    />
            );
        }   
}

const mapStateToProps = (state, ownProps) => {
    return { todo: state.todos[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchTodo, deleteTodo })(TodoDelete);