import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CommentsCountContext } from '../ComentsCountContext';


const AddCommentForm = ({ onSubmission }) => {
    const [name, setName] = useState('');


    const { id } = useParams();
    const { updateCommentCount, commentContent, setCommentContent } = useContext(CommentsCountContext);

    useEffect(() => {
        const commenterName = localStorage.getItem('commenter-name');
        if (commenterName) {
            setName(commenterName);
        }
    }, []);

    const onSubmitClick = async () => {
        await axios.post('/api/blogposts/addcomment', { name, content: commentContent[id], blogPostId: id });
        const copy = { ...commentContent };
        copy[id] = '';
        setCommentContent(copy);
        localStorage.setItem('commenter-name', name);
        onSubmission();
        updateCommentCount();
    }

    const updateCommentContent = e => {
        const copy = { ...commentContent };
        copy[id] = e.target.value;
        setCommentContent(copy);
    }

    return (
        <div className="card my-4">
            <h5 className="card-header">Leave a Comment:</h5>
            <div className="card-body">
                <input type="hidden" value="3003" name="postId" />
                <div className="form-group">
                    <input type="text"
                        value={name}
                        placeholder="Please enter your name"
                        className="form-control"
                        onChange={e => setName(e.target.value)}
                        name="name" />
                </div>
                <div className="form-group">
                    <textarea placeholder="Type your comment here but remember to be be nice..."
                        value={commentContent[id]}
                        name="content"
                        className="form-control"
                        onChange={updateCommentContent}
                        rows="3" />
                </div>
                <button disabled={!name || !commentContent}
                    onClick={onSubmitClick}
                    className="btn btn-primary">Submit
                </button>

            </div>
        </div>
    )
}

export default AddCommentForm;