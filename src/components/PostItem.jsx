import React from 'react';

const PostItem = (props) => {
    //console.log(props);
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.desc}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;