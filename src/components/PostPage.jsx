import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetch";
import Loader from "./UI/Loader/Loader";

const PostPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchPostSimple, isPLoading, PError] = useFetching(async (id) => {
        const response = await PostService.similarPost(id)
        setComments(response.data);
    })
    useEffect(()=>{
       fetchPostById(params.id)
        fetchPostSimple(params.id)
    },[])
    return (
        <div className="POSTS">
            {isLoading
                ? <Loader/>
                :
                <div className="postSimple">
                    <div>
                        <strong className="title">{post.title}</strong>
                    <div>
                        <div className="summary">{post.summary}</div>
                        <div className="Istok">
                            <div>Сайт нововсти: "{post.newsSite}"</div>
                            <p>Ссылка на источник: <a href={post.url}>{post.url}</a></p>
                        </div>

                    </div>
                    </div><img  className="postImage" src={post.imageUrl}/>
                </div>
            }
            <h1 style={{color: '#09ee89'}}>Похожие записи:</h1>
            {isPLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} className="post">
                            <div>
                                <strong className="title">{comm.title}</strong>
                                <div>
                                    <div className="summary">{comm.summary}</div>
                                    <div className="Istok">
                                    <div>Сайт нововсти: "{comm.newsSite}"</div>
                                    <p>Ссылка на источник: <a href={comm.url}>{comm.url}</a></p>
                                    </div>
                                </div>
                            </div><img className="postImage" src={comm.imageUrl}/>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostPage;