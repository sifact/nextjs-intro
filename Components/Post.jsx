import Link from "next/link";
import React from "react";

const Post = ({ post }) => {
    const { title, body } = post;
    return (
        <div className="m-8 p-6 rounded-md border-l-4 border-slate-700 w-1/3 text-black bg-gray-100">
            <h1 className="mb-3 text-2xl ">{title}</h1>

            <Link href={`posts/${post.id}`}>
                <button className="font-semibold rounded-full leading-none py-2 px-4 bg-slate-400">
                    See Details
                </button>
            </Link>
        </div>
    );
};

export default Post;
