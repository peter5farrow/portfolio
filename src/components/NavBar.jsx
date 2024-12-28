import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <div id="navBar">
      <NavButton page="home" />
      <NavButton page="projects" />
      <NavButton page="about-me" />
      <NavButton page="resume" />
    </div>
  );
}
