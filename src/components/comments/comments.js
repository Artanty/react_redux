import React from "react";
import CommentDetail from './commentDetail';
import faker from 'faker';

function Comments() {
    return (
        <div className="ui container comments">
            <CommentDetail author="lol1" timeAgo="Todat at 4:05PM" content="cool" avatar={faker.image.avatar()}/>
            <CommentDetail author="lol2" timeAgo="Todat at 7:35PM" content="cool" avatar={faker.image.avatar()}/>
            <CommentDetail author="lol3" timeAgo="Todat at 6:15PM" content="cool" avatar={faker.image.avatar()}/>
        </div>
    );
}

export default Comments;
