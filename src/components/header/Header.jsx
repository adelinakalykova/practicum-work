import "./header.scss";
import MenuBurger from "../MenuBurger/MenuBurger";
function Header() {
  return (
    <header>
      <div className="container">
        <MenuBurger />
      </div>
    </header>
  );
}
export default Header;
