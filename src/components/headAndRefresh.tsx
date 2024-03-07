import React from "react";

type HeadAndRefreshProps = {
  onButtonClick: () => void;
};

const HeadAndRefresh: React.FC<HeadAndRefreshProps> = ({ onButtonClick }) => {
  return (
    <div className='HeadAndRefresh'>
      <h5 className='head-title'>Notes</h5>
      <button onClick={onButtonClick} className='btn btn-primary refresh-btn'>
        ↻
      </button>
    </div>
  );
};

export default HeadAndRefresh;
