import { useState } from "react";
import axios from "axios";

const Comments = ({ postId, comments: initialComments }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = () => {
    console.log(newComment)
    // Un-comment the lines below to complete your solution
    // ====================
    axios
      .post(`http://localhost:3002/post/${postId}/comment`, { newComment })
      // res contains all the data for the post, including comments (new and old)
      .then((res) => {
        setComments(res.data.comments); // set the state of commments to reflect the new comment
        setNewComment('');
      })
  }

  return (
    <div style={{ border: '1px solid black' }}>
      {comments && comments.map((comment, i) => (
        <div key={i + comment}>
          <p>
            {comment}
          </p>
        </div>
      ))}
      <div>
        <input value={newComment} onChange={e => setNewComment(e.target.value)} />
      </div>
      <button onClick={handleSubmitComment}>
        Submit
      </button>
    </div>
  )
}

export default Comments;