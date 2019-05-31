import React from 'react';

import { getFriends } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Friends extends React.Component {

componentDidMount() {

//  this.props.getFriends();
}

    render() {
        return (
            <div>
                <h1> pls </h1>
            </div>
        )
    }
}

//mapStateToProps = ({ friends, fetchingFriends}) => ({
//    friends,
//    fetchingFriends
//})

export default Friends;
