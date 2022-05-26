import React from 'react';
import {useNavigate} from "react-router-dom";
import moment from "moment";
const PostItem = (props) => {
    const navigate = useNavigate()
    var data = moment(props.post.publishedAt).format('DD MMMM YYYY, h:mm:ss a');
    return (
            <div className="post">
                <div className="post_news">
                    <strong className="Title" onClick={()=> navigate(`/news/${props.post.id}`)}>{props.post.title}</strong>
                    <div>
                        <div className="summary">{props.post.summary}</div>
                        <div className="date">Дата публикации: {data}</div>
                    </div>
                </div><img  className="postImage" src={props.post.imageUrl}/>
            </div>
    );
};
export default PostItem;