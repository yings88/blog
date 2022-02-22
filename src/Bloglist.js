import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>

          <p>{blog.body}</p>
          <img src={blog.image} className="image-preview"alt="file missing">
          </img>
          <p className="bold"> Written by {blog.author} </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
