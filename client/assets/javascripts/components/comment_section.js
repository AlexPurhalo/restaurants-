import React from 'react';

import Actions from '../actions';
import CommentStore from '../stores/comment_store';

import CommentList from './comment_list';
import CommentForm from './comment_form'

class CommentSection extends React.Component {
    constructor(props) {
        super();

        this.store = new CommentStore;
        this.actions = new Actions(props.restaurantId);
        this.actions.setComments(props.comments);
        // console.log(props)
    }

    static get childContextTypes() {
        return {
            store: React.PropTypes.object.isRequired,
            actions: React.PropTypes.object.isRequired
        }
    }

    getChildContext() {
        return {
            store: this.store,
            actions: this.actions
        }
    }

    render() {
        return (
            <div>
            <CommentForm isReplying={true}/>
            <CommentList parent_id={null} />
            </div>
    );
    }
}

export default CommentSection;
