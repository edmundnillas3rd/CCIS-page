import Link from "next/link";

export default function Post({ title, info, url }) {
  return (
    <li className="flex-container post">
      <div className="flex-container post-info-container">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
      <Link href={url}>
        <a className="post-link">
          <p>See Announcement &gt;&gt;</p>
        </a>
      </Link>
    </li>
  );
}
