import React from "react";
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        })
    }

    render() {
        return (
            <div>
                Here's is a big list of Users: -
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

const loadData = (store) => {
   return store.dispatch(fetchUsers());
}

const _mapStateToProps = state => {
    return { users: state.users };
};

export default {
    loadData: loadData,
    component: connect(_mapStateToProps, { fetchUsers })(UsersList)
}