import { useEffect, useState } from "react";
import './GitAPI.scss'

export function GithubApi() {
  const URL = "https://api.github.com/users/EmilyWahlin/repos";

  const [data, setData] = useState([]); //tom array till en början

   useEffect(() => {
    fetch(URL) // Gör ett HTTP GET-anrop till den angivna URL:en
      .then((resp) => resp.json())
       // Hanterar svaret från servern genom att omvandla det till JSON-format
      .then((data) => {
        setData(data); // Uppdaterar komponentens state med den hämtade datan
        console.log(data); //loggar egenskaper
      });
 },  []); // Tom array innebär att useEffect endast körs vid komponentens första rendering

 return (
    <section className="github__section">
       {data.map((repo) => (
        <article key={repo.id} className="github__article">
          <a href={repo.html_url} className="github__link">
            <h3 className="github__title">{repo.name}</h3>
          </a>
          <p className="repo__description">{repo.description}</p>
        </article>
      ))}
    </section>
  );
}
