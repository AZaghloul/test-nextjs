import Navbar from "./../components/navbar";
import Fetch from "isomorphic-unfetch";

export default function Posts(props) {
  return (
    <div>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {props.posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Posts.getInitialProps = async function () {
  const res = await Fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    posts: data,
  };
};
