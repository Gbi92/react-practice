import Article from "./Article";
import { Link } from 'react-router-dom';
import { useEffect, useState} from 'react';
 
function Home() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/posts')
      .then(response => response.json())
      .then(data => {
        setPostList(data.posts);
      })
  }, [])

  return (
    <div>
      <header>
        <h1>SPACE</h1>
      </header>
      <main>
        <section>

          {postList.length > 0 ? postList.map((element) => {
            return <Article key={element.id} post={element}/>;
          }) : <h1>Loading...</h1>}

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