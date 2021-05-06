import React from "react";
import {format} from 'date-fns';

const Comment = ({comment}) => {
    return (
        <div className="media mb-4">
            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
            <div className="media-body">
                <h5 className="mt-0">
                    {comment.name}
                    <small className="ml-1">{format(new Date(comment.dateCreated), 'cccc MMMM do, yyyy')}</small>
                </h5>
                {comment.content}
            </div>
        </div>
    )
}

export default Comment;