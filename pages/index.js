import {Component} from "react";
import {connect} from "react-redux";
import {getUsersRequest} from "../components/redux/actions/users.js";

class Index extends Component {
  componentDidMount() {
    this.props.getUsersRequest();
  }

  render() {
    const {items} = this.props.users;
    return (
        <div>
          <h1>Users List</h1>
          <ul>
            {items.map(item => (
                <li key={item.id}>{item.firstName} {item.lastName}</li>
            ))}
          </ul>
        </div>
    )
  }
}

export default connect(({users}) => ({users}), {
  getUsersRequest
})(Index);
