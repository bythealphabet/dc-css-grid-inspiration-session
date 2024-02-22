import React, { useState } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import CardProject from "../card/CardProject";

const isTouchDevice = () => {
  return window.matchMedia("(pointer: coarse)").matches;
};

function Image({ img, title }) {
  return (
    <img
      src={img}
      alt={title}
      css={css`
        grid-column: 1 / -1;
        grid-row: 1 / -1;
      `}
    />
  );
}

function ProjectCarousel({ projectArr = ["", ""] }) {
  const touchDevice = isTouchDevice();

  if (projectArr.length === 0) {
    return <p>Loading .....</p>;
  }

  return (
    <section className="projectonan" css={projectCarouselStyles(touchDevice)}>
      {projectArr.map((info, i) => {
        return (
          <figure className="projecto-f" key={info.id}>
            <Image {...info} />
            <CardProject {...info} />
          </figure>
        );
      })}
    </section>
  );
}
export default ProjectCarousel;

/////STYLE/////

function projectCarouselStyles(touchDevice) {
  return css`
    display: grid;
    grid-template-columns: repeat(auto-fill, 500px);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 1em;

    .projecto-f {
      height: 333px;
      overflow: hidden;
      --slide: 200px; 

      display: grid;
      transition: 300ms ease-in-out;
      grid-template-columns: var(--slide) auto;

      @media (min-width: 900px) {
        --slide: 400px;
        overflow-x: hidden;
      }

      img {
        cursor: pointer;
        overflow: hidden;
        width:300px;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 8px;

        @media (min-width: 900px) {
          width: 500px;
        }
      }
    }

    .projecto-f:has(img:hover) {
      --slide: 200px;
    }
  `;
}
