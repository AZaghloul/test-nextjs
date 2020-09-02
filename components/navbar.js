import Link from "next/link";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </li>
      <li>
        <Link href="/comments">
          <a>Comments</a>
        </Link>
      </li>
      <li>
        <Link href="/photos">
          <a>Photos</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
