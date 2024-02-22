import React, { useState, useEffect } from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */
import { projectInfoArray } from "./slidesInfo";
import { useParams, Link } from "react-router-dom";
import ProjectCarousel from "../../components/carousel/ProjectsCarousel";
import MarkdownComponent from "./markdown/MarkdownComponent";
import Modal from "../../components/modal/Modal";

function Slide() {
  const theme = useTheme();
  const [projectInfo, setProjectInfo] = useState("");
  const [otherProjects, setOtherProjects] = useState([]);
  const [modal, setModal] = useState(false);
  const { id: projectID } = useParams();

  useEffect(() => {
    findProject();
  }, [projectID]);

  function findProject() {
    const info = projectInfoArray.filter((info) => info.id === projectID);
    const other = projectInfoArray.filter((other) => other.id !== projectID);
    setProjectInfo(...info);
    setOtherProjects(other);
  }

  const togleModal = () => {
    console.log("togleModal", modal);
    setModal(!modal);
  }

  console.log(modal);

  return (
    <main className="base-grid" css={projectStyles(theme, projectInfo?.name)}>
      <button className={"btn go-to-slides"} onClick={togleModal} css={css``}>Open Slides
      </button>
      <h1 className="main-heading project-heading">{projectInfo.name}</h1>

      <MarkdownComponent md={projectInfo.md} position={css`
        grid-column: 2 / -2;
        align-self: center;
        grid-row: 3;

        @media (min-width: 900px) {
          grid-column: 2 / span 8;
        }

      `} />
      {
        modal &&
        <Modal setModalActive={setModal}>
          <MarkdownComponent md={projectInfo.md} />
        </Modal>
      }

      <div className="other-projects">
        <ProjectCarousel projectArr={otherProjects} />
      </div>
    </main>
  );
}

export default Slide;

////STYLES////

function projectStyles(theme, name) {
  return css`
    display: grid;
    grid-template-rows:
      100px 60px minmax(300px, auto) 100px minmax(300px, auto)
      200px 200px;

    grid-column: 1 / -1;
    grid-row: 2 / -1;
    overflow-x: hidden;
    
    .go-to-slides {
      grid-column: -3;
      grid-row: 2;
      justify-self: end
    }

    .project-heading {
      grid-column: 2 / -4;
      grid-row: 2;
      align-self: flex-end;
    }

    img {
      object-position: center;
    }

    .other-projects {
      grid-column: 2 / -2;
      grid-row: 5 / span 2;

      h3 {
        margin-bottom: 2em;
      }
    }
  `;
}
