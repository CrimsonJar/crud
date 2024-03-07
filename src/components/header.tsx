import React from "react";
import HeadAndRefresh from "./headAndRefresh";
type HeaderProps = {
  onButtonClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onButtonClick }) => {
  return (
    <div className='head'>
      <HeadAndRefresh onButtonClick={onButtonClick} />
    </div>
  );
};
export default Header;
