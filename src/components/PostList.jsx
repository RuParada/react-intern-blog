import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {
    /* МОО преобразовываем в массив реакт элементов через map */
    return (
        <div>
            <h2 
              style={{textAlign: "center"}}
            >
              {title}
            </h2>
            {posts.map(post =>
              <PostItem post={post} key={post.id} />
            )}
        </div>
    );
};

export default PostList;