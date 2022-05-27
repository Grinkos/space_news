import React, {memo, useEffect, useMemo, useRef, useState} from 'react';
import {usePosts, usePostsSum} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetch";
import PostService from "../API/PostService";
import NewsFilter from "../components/NewsFilter";
import ListNews from "../components/ListNews";
import Loader from "../components/UI/Loader/Loader";
import {useParams} from "react-router-dom";
import PostItem from "../components/PostItem";


function News() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query:''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts);
    })
    useEffect(() => {
        fetchPosts()
    }, [])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    return (
        <div className="App">
            <NewsFilter
                filter={filter}
                setFilter={setFilter}/>
            {postError &&
                <h1 style={{textAlign: 'center', color: '#09ee89'}}>Произошла ошибка ${postError}</h1>
            }
            {isPostLoading
                 ?<div style={{display:'flex', justifyContent:'center', marginTop:50}}><Loader/></div>
                 :<ListNews remove={removePost} posts={sortedAndSearchedPosts}/>
            }
        </div>

    );
}
export default News;