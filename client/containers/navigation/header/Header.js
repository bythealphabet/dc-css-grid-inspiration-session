import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { useLocation, Link } from "react-router-dom";
import SunMoon from "../../../components/header/icons/LightDark";

const links = [
  { name: "Home", path: "/", btn: false },
  { name: "Slides", path: "/slides", btn: false },
];

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="base-grid" css={headerStyles}>
      <SunMoon
        position={css`
          z-index: 12;
          grid-column: 2 / span 2;
          grid-row: 1 / -1;
          align-self: center;

          @media (min-width: 900px) {
            grid-column: 2 / span 2;
          }
        `}
      />
      <div css={css`
        display: flex;
        gap: 1rem;
        grid-column: -3;
        align-self: center;
        justify-self: end;
        grid-row: 1 / -1;
      `}>
        {
          links.map((link) => {
            if (link.path === "/" && isHome) return null;
            return <Link key={link.path} to={link.path} className={link.btn ? "btn" : ""}>
              {link.name}
            </Link>
          })
        }
      </div>
    </header>
  );
}
export default Header;

//////// STYLES

function headerStyles() {
  return css`
    display: grid;
    grid-template-rows: repeat(2, calc(var(--headerHeight) / 2));
    height: var(--headerHeight);
    grid-column: 1 / -1;
    grid-row: 1;
  `;
}
