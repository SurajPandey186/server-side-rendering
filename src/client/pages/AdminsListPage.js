import React from "react";
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from "../components/hocs/RequireAuth";

class AdminsListPage extends React.Component {

  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(user => {
      return <li key={user.id}>{user.name}</li>;
    })
  }

  render() {
    return (
      <div>
        Here's is a big list of Users: -
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

const loadData = (store) => {
  return store.dispatch(fetchAdmins());
}

const _mapStateToProps = ({ admins }) => {
  return { admins };
};

export default {
  loadData: loadData,
  component: connect(_mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage))
}