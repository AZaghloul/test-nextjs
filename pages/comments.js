import Navbar from "./../components/navbar";
import Fetch from "isomorphic-unfetch";

export default function Comments(props) {
  return (
    <div>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {props.comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Comments.getInitialProps = async function () {
  const res = await Fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return {
    comments: data,
  };
};
