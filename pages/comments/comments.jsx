import React from "react";

const Comments = ({ comments }) => {
    return (
        <div>
            {console.log(comments)}
            <h1>{comments.length}</h1>
        </div>
    );
};

export default Comments;

export const getServerSideProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();

    return {
        props: {
            comments: data,
        },
    };
};
