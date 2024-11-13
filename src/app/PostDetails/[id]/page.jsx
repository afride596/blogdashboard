"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { useContext } from "react";
import userContext from "src/context/UserContext";
const PostDetails = () => {
  const [comments, setComments] = useState([]);

  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const { authorName } = useContext(userContext);
  //
  const param = useParams();
  console.log(param.id);

  const [post, setPost] = useState(null);
  useEffect(() => {
    fechcomment();

  }, []);
  useEffect(() => {
    if (param.id)
      fetch(`https://jsonplaceholder.typicode.com/posts/${param.id}`)
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((error) => {
          console.error(error);
          setPost(null);
        });
  }, [param.id]);
  const fechcomment = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${param.id}`
    );
    const data = await response.json();
    setComments(data);
    console.log(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      postId: param.id,
      name: name,
      body: commentText,
      email: "user@example.com",
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );

      const data = await response.json();
      setComments([data, ...comments]);
      setName("");
      setCommentText("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };
  const handleDelete = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };
  if (!post) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center flex-col mx-auto">
      <div className="flex justify-center items-center flex-col mx-auto ">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-2xl mb-4">{post.title}</h1>
        </div>
        <div>
          <p> {post.body}</p>
        </div>
      </div>

      <div>
        <h1 className="font-black text-2xl text-left">Comments</h1>
        <div className="flex flex-col ">
          {comments.length === 0 ? (
            <p>No comments available.</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="mb-4">
                <p className="font-semibold">{comment.name}</p>
                <p>{comment.body}</p>
                <p className="text-gray-500">{comment.email}</p>
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="mt-2 text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-full max-w-lg mt-8">
        <h1 className="font-black text-2xl mb-4">Add a Comment</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-20">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <textarea
            placeholder="Your Comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
            className="p-2 border rounded"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostDetails;
