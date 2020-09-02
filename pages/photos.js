import Navbar from "./../components/navbar";
import Fetch from "isomorphic-unfetch";

export default function Photos(props) {
  return (
    <div>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {props.photos.map((photo) => (
            <tr key={photo.id}>
              <td>{photo.id}</td>
              <td>{photo.title}</td>
              <td>
                <img alt={photo.title} src={photo.thumbnailUrl} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Photos.getInitialProps = async function () {
  const res = await Fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  return {
    photos: data,
  };
};
