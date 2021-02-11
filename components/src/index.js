import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    <p>Are you sure you want to do this?</p>
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="4:45PM"
                    blogComment="nice!"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="2:00AM" 
                    blogComment="cool!"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="6:00PM" 
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))