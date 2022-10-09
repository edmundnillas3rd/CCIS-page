export default function Post({ title, info, url }) {
  return (
    <li className="flex-container post">
      <div className="flex-container post-info-container">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
      <a className="post-link" href={url}>
        <p>See Announcement &gt;&gt;</p>
      </a>
    </li>
  );
}
