import * as React from 'react';

import './Pager.scss';

export interface IPagerProps {
  currentPage: number;
  maxPage: number;
  minPage: number;
  pageChange: (page: number) => void;
}

const Pager = (props: IPagerProps) => {
  const { currentPage, maxPage, minPage = 0, pageChange } = props;

  const doubleArrowLeftClickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    if (currentPage > 1) {
      pageChange(1);
    }
  }

  const arrowLeftClickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    if (currentPage > 1) {
      pageChange(currentPage - 1);
    }
  }

  const arrowRightClickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    if (currentPage < maxPage) {
      pageChange(currentPage + 1);
    }
  }

  const doubleArrowRightClickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    if (currentPage < maxPage) {
      pageChange(maxPage);
    }
  }

  const inputFieldChangeChandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = +event.target.value || 1;
    if (value <= maxPage && value >= minPage && currentPage !== value) {
      pageChange(value);
    }
  };

  return (
    <ul className="pager">
      <li onClick={doubleArrowLeftClickHandler} tabIndex={0} className="pager__item pager__item--nav">
        <i className="fas fa-angle-double-left" />
      </li>
      <li onClick={arrowLeftClickHandler} tabIndex={0} className="pager__item pager__item--nav">
        <i className="fas fa-angle-left" />
      </li>
      <li className="pager__item pager__item--input">
        <div>
          Page&nbsp;
          <input onChange={inputFieldChangeChandler}
            step="1"
            type="number"
            value={currentPage}
            max={maxPage}
            min={minPage}
            className="pager__input"
            tabIndex={0}
          />&nbsp;
          of&nbsp;
          {maxPage}
        </div>
      </li>
      <li onClick={arrowRightClickHandler} tabIndex={0} className="pager__item pager__item--nav">
        <i className="fas fa-angle-right" />
      </li>
      <li onClick={doubleArrowRightClickHandler} tabIndex={0} className="pager__item pager__item--nav">
        <i className="fas fa-angle-double-right" />
      </li>
    </ul>
  );
};

export default Pager;