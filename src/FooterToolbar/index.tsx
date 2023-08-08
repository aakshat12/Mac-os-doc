import { FaAddressCard, FaGlobe, FaHome, FaSearch } from "react-icons/fa";
import FooterToolbar, { IFooterToolbarComponentProps } from "./FooterToolbar";
import style from './index.module.css'

const FooterToolbars = () => {
  const data: IFooterToolbarComponentProps[] = [
    {
      icon: <FaHome className={style.img}/>,
      onclick: () => console.log("test"),
      label: "Home"
    },
    {
      icon: <FaGlobe  className={style.img}/>,
      onclick: () => console.log("test"),
      label: "Globe"
    },
    {
      icon: <FaSearch  className={style.img}/>,
      onclick: () => console.log("test"),
      label: "Search"
    },
    {
      icon: <FaAddressCard  className={style.img}/>,
      onclick: () => console.log("test"),
      label: "AddressCard"
    }




  ];

  return (
    <div className={style.dockContainer}>
      <div className={style.dock}>
        <ul className={style.ul}>
          {data.map((item) => (
            <FooterToolbar {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterToolbars;
