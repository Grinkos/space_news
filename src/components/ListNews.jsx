import React from 'react';
import PostItem from "./PostItem";


const ListNews = ({posts, remove}) => {
    if(!posts.length){
        return (
            <h1 style={{textAlign: 'center', color: '#09ee89'}}>
                Посты не найдены!
            </h1>
        )
    }
    return (
        <div>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index+1} post={post} Post={post} key={post.id}/>
            )}
        </div>
    );
};
export default ListNews;