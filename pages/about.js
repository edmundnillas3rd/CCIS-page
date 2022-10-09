import Profile from "../components/Profile";

export default function About() {
  return (
    <div className="flex-container about">
      <div className="flex-container about-container">
        <h3>About this organization</h3>
        <hr />
        <div className="info-container">
          <p>
            Phasellus lobortis tempor metus vitae placerat. Pellentesque
            faucibus velit nec condimentum mollis. Morbi cursus, augue sit amet
            rutrum tempor, ex mi pellentesque tortor, venenatis efficitur risus
            purus nec nunc. Pellentesque varius sapien a sem consectetur
            bibendum. Vestibulum vel elit velit. Quisque ut aliquet urna. Proin
            eleifend odio nisi, eu lobortis metus lobortis a.
          </p>
        </div>
      </div>
      <div className="flex-container members-container">
        <h3>Members</h3>
        <Profile
          name="First Member"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <Profile
          name="Second Member"
          description="Etiam vestibulum lectus ut tellus iaculis, sed interdum odio ultrices"
        />
      </div>
    </div>
  );
}
