import React from "react";
import CommentDetail from './commentDetail';
import faker from 'faker';
import ApprovalCard from "./approvalCard";

function Comments() {
    return (
        <div className="ui container comments">
            <ApprovalCard>Just text</ApprovalCard>
            <ApprovalCard><h4>Warning!</h4>Just text</ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="lol1" timeAgo="Todat at 4:05PM" content="cool" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="lol2" timeAgo="Todat at 7:35PM" content="cool" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="lol3" timeAgo="Todat at 6:15PM" content="cool" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
}

export default Comments;
