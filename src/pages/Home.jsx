import headshot from "../assets/headshot.jpg";

export default function Home() {
  return (
    <>
      <h1 className="header">Hello</h1>
      <img src={headshot} alt="headshot" height="450vh" width="auto" />
    </>
  );
}
