export default function Post({ title, info, url }) {
  return (
    <li className="post">
      <a href={url}>
        {title}
        <p>{info}</p>
        <p>See Announcement &gt;&gt;</p>
      </a>
    </li>
  );
}
