export default function Dropdown(props) {
    const[isOpenMenu, setIsOpenMenu] = React.useState(false);
    const menuRef = React.useRef(null);
    React.useEffect(() => {
      isOpenMenu && menuRef.current.focus();
    }, [isOpenMenu]);
    const handleClick = (text) => () => {
      alert(text);
    };
    return (
      <div className="" 
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        ref={menuRef}
        onBlur={() => setIsOpenMenu(false)}
        tabIndex={0}>
        <div className="">
          Menu 4
        </div>
        <ul className="" hidden={!isOpenMenu} onClick={(e) => e.stopPropagation()}>
          <li className="" onClick={handleClick("a")}> a </li>
          <li className="" onClick={handleClick("b")}> b </li>
          <li className="" onClick={(e) => e.stopPropagation()}> c 
          </li>
        </ul>
      </div>
    );
  };