export default function NavButton({ page }) {
  function extractPageName(name) {
    const pageNameArray = [];
    for (const word of name.split("-")) {
      pageNameArray.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return pageNameArray.join(" ");
  }

  if (page === "home") {
    return (
      <div id="homeButton">
        <a href="/">Peter Farrow</a>
      </div>
    );
  }

  return (
    <div className="nav-button">
      <a href={`/${page}`}>{extractPageName(page)}</a>
    </div>
  );
}
