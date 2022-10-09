import Image from "next/image";
export default function Profile({ src, name, description }) {
  return (
    <div className="flex-container profile-container">
      {src ? (
        <Image src={src} width={48} height={48} alt="member-profile" />
      ) : (
        <Image
          src="/images/user.png"
          width={48}
          height={48}
          alt="member-profile"
        />
      )}
      <div className="vl"></div>
      <div className="flex-container personal-information-container ">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
