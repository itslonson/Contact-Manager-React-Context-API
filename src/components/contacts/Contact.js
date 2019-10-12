import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

import "./styles/contact.css";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteContact = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="card card-body mb-3">
                <h4>
                  {name}{" "}
                  <i
                    className="delete fas fa-times"
                    onClick={this.onDeleteContact.bind(this, id, dispatch)}
                  ></i>
                  <Link to={`contact/edit/${id}`}>
                    <i
                      className="edit fas fa-pencil-alt"
                      style={{ paddingRight: "16px" }}
                    ></i>
                  </Link>
                  {showContactInfo ? (
                    <i
                      onClick={() =>
                        this.setState({
                          showContactInfo: !this.state.showContactInfo
                        })
                      }
                      className="hide fas fa-chevron-up"
                      style={{ cursor: "pointer" }}
                    ></i>
                  ) : (
                    <i
                      onClick={() =>
                        this.setState({
                          showContactInfo: !this.state.showContactInfo
                        })
                      }
                      className="show fas fa-chevron-down"
                      style={{ cursor: "pointer" }}
                    ></i>
                  )}
                </h4>

                {showContactInfo ? (
                  <ul className="list-group">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                  </ul>
                ) : null}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
