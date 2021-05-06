import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


const CommentsCountContext = createContext();

const CommentsCountContextComponent = ({ children }) => {
    const [commentCount, setCommentCount] = useState(0);   
    const [commentContent, setCommentContent] = useState({});

    const updateCommentCount = async () => {
        const { data } = await axios.get('/api/blogposts/gettotalcomments');
        setCommentCount(data);
    }

    useEffect(() => {
        updateCommentCount();
    }, []);

    return (
        <CommentsCountContext.Provider value={{ commentCount, updateCommentCount, commentContent, setCommentContent }}>
            {children}
        </CommentsCountContext.Provider>
    )
}

export { CommentsCountContext, CommentsCountContextComponent };