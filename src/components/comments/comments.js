import React from "react";
import CommentDetail from './commentDetail';
import faker from 'faker';
import ApprovalCard from "./approvalCard";


function Comments() {
    return (
        <div className="ui container comments">
            <ApprovalCard>Just text</ApprovalCard>
            <ApprovalCard><h4>Warning!</h4>Just text</ApprovalCard>

            {[...Array(3)].map((x, i) =>

                <ApprovalCard>
                    <CommentDetail
                        author={faker.lorem.words(1)}
                        timeAgo={faker.date.weekday()}
                        content={faker.lorem.words(5)}
                        avatar={faker.image.avatar()}/>
                </ApprovalCard>
            )}

        </div>
    );
}

export default Comments;
