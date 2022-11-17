import React, { useState } from "react";
import axios from "axios";

const NewPost = ({ getPostsData }) => {
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const onSubmit = () => {
    console.log({
      id,
      title,
      body
    })

    axios
      .post('http://localhost:3002/post', { id, title, body }) // To create a new post, you'll have to POST /post
      .then(getPostsData) // Then, retrieve the data from the backend. This calls the function from Feed to re-render the page
      .catch((error) => console.log(error));
  }

  return <div>
    <div>
      <input type="text" placeholder="ID" value={id} onChange={e => setId(e.target.value)} />
      {/* onChange funcion called when the values change */}
    </div>
    <div>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
    </div>
    <div>
      <input type="text" placeholder="Body" value={body} onChange={e => setBody(e.target.value)} />
    </div>
    <button style={{ marginTop: '4px' }} onClick={onSubmit}>
      Submit
    </button>
  </div>
}

export default NewPost;