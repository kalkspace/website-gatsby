import React from "react";
import "../styles/typo.css";
function styleguide() {
  return (
    <div>
      <h1>Storybook ist doof</h1>
      <h2>nur Spaß</h2>
      <h3>Überschrift 3</h3>
      <h4>Überschrift 4</h4>
      <h5>Überschrift 5</h5>
      <h6>Überschrift 6</h6>
      <div className="section">
        <p>
          Wir sind ein <a href="#">Coworking Verein</a> und eine Community
          kreativer Menschen in Kalk. Zusammen wollen wir einen Ort schaffen, an
          dem Menschen arbeiten, ihre Ideen verwirklichen und sich gegenseitig
          bereichern können. Du findest uns hier:
        </p>
        <a href="#" className="button">
          mehr
        </a>
      </div>
    </div>
  );
}
export default styleguide;
