import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('basil');
  const [image, setImage] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author, image};

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
     history.push('/')
    })
  }


  return (
    <div className="create">
      Add a new blog
      <form
        onSubmit={handleSubmit}
      >
        <label>Blog title:</label>
        <input type="text" required value={title} onChange={ (e)=> setTitle(e.target.value)}></input>
        <label>Blog body:</label>
        <textarea required value={body} onChange={ (e)=> setBody(e.target.value)}></textarea>
        <label>Image:</label>
         <input type="file" accept="image/*" required value={image} onChange={(e) => setImage(e.target.value)} alt=""></input>
        <select
          value={author}
          onChange={ (e)=>setAuthor(e.target.value)}
        >
          <option value="ying">ying</option>
          <option value="basil">basil</option>

        </select>

        {!isPending && < button>add blog</button>}
        {isPending && < button>adding blog...</button>}

      </form>
    </div>
  );
};

export default Create;
