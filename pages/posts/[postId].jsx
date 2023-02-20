import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const PostDetails = ({ post }) => {
    const router = useRouter();
    const handleBack = () => {
        router.push("/posts");
    };
    return (
        <div className="m-8 w-1/2 p-4 text-black rounded-md bg-gray-300">
            <span>{post?.id}</span>
            <h1 className="text-2xl font-semibold">{post?.title}</h1>
            <p className="">{post?.body}</p>

            <button
                onClick={handleBack}
                className="my-4 font-semibold rounded-full leading-none py-2 px-4 bg-slate-400"
            >
                Back
            </button>
        </div>
    );
};

// normal fetch
export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
    );
    const data = await res.json();
    console.log(data);
    return {
        props: {
            post: data,
        },
    };
};

// for dynamic id
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    const paths = posts.map((post) => {
        return {
            params: {
                postId: `${post.id}`,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export default PostDetails;
