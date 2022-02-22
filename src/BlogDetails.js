import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, { method: 'DELETE' }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="blog-details">
      Blog details: {id}
      {isPending && <div>Loading</div>}
      {error && <div>{error}</div>}
      {blog && (<article>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
      </article>)}

      <button onClick={handleClick}>delete</button>
    </div>
  );
};

export default BlogDetail;