import Article from "./Article";
import { Link } from 'react-router-dom';
 
function Home() {
  return (
    <div>
      <header>
        <h1>SPACE</h1>
      </header>
      <main>
        <section>
          <Article />
        </section>
        <aside>
          <Link to="/newpost" className="postBtn">SUBMIT A NEW POST</Link>
          <div className="about">
            <h3>ABOUT <a href="#">r/space</a></h3>
            <div className="aboutDetails">
              <p>Share &amp; discuss informative content on:</p>
              <ul>
                <li>Astrophysics</li>
                <li>Cosmology</li>
                <li>Space Exploration</li>
                <li>Planetary Science</li>
                <li>Astrobiology</li>
              </ul>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default Home;