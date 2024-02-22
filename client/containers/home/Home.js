import React from "react";
import { jsx, css } from "@emotion/react";
import { projectInfoArray } from "../slides/slidesInfo";
import { Link } from "react-router-dom"; /** @jsx jsx */

function Home() {
  return (
    <main className="base-grid" css={homeStyles}>
      <h1 className="heading heading-position"><span className="heading--main">CSS Grid</span><span
          className="heading--sub">The Ultimate Layout Tool</span></h1>
      <menu className='menu menu-position'>
        {
          projectInfoArray.map((project) => {
            return <li>
              <Link to={`/slide/${project.id}`}>{project.name}</Link>
            </li>
          })
        }
      </menu>
    </main>
  );
}
export default Home;

/////////STYLES
function homeStyles() {
  return css`
    display: grid;
    grid-template-rows: 4rem repeat(2,calc((100vh / 2 - var(--headerHeight))));
    grid-column: 1 / -1;
    grid-row: 2 / -1;

    .heading {
      display: flex;
      flex-flow: column nowrap;
      line-height: 1;
      color: var(--color-dotcontrol-pink);

      &--main {
        font-weight: 700;
        font-size: 8rem;
        transform: translateX(-1rem);
        line-height: .8;

        @media (min-width: 900px) {
          font-size: 12rem;
        }
      }

      &--sub {
        font-size: 3rem;
        color: var(--color-white);

        @media (min-width: 1440px) {
          font-size: 5rem;
        }
      }
    }
    
    .heading-position {
      grid-column: 2 / -2;
      grid-row: 2;


      @media (min-width: 900px) {
        font-size: 12rem;
      }
    }
    
    .menu {
     list-style:none ;
      display: flex;
      flex-flow: column nowrap; 
      gap: 1rem;

      a {
        text-decoration: none;
        display: flex;
        text-transform: capitalize;
        color: white;
        transition: color 0.2s ease-in-out;

        :hover {
          color: var(--pink);
        }

        @media (min-width: 900px) {
          font-size: 1.4rem;
          color: var(--white);
          text-align: center;
          font-weight: bold;
        }
      }
    }
    
    .menu-position {
      grid-column: 2 / -2;
      grid-row: 3;
      align-self: center;
    }
  `;

}
