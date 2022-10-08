import { useState, useEffect } from "react";
import Post from "./Post";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const url = "/";

  useEffect(() => {
    setAnnouncements((announcementArr) => [
      ...announcementArr,
      {
        key: 48,
        title: "Uniform Dispensation Slip",
        info: "Students should acquire a new slip",
        url: url,
      },
      {
        key: 30,
        title: "Yet Another Announcement",
        info: "Full details in the official Facebook page of CCIS",
        url: url,
      },
    ]);
  }, []);
  return (
    <div className="flex-container announcement-container">
      <h3>Announcements</h3>
      <ul className="flex-container post-list-container">
        {announcements.length !== 0
          ? announcements.map((a) => <Post key={a.key} {...a} />)
          : "There are no announcements"}
      </ul>
    </div>
  );
}
