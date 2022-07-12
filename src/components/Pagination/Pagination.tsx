import React, { PropsWithChildren, useEffect, useState } from "react";

import "./../common.css";
import "./Pagination.css";

export interface PaginationProps extends PropsWithChildren {
  data: any[];
  setCurrent: (data: any[]) => void;
  pageNumberLimit?: number;
  itemsPerPage?: number;
}

const Pagination = ({
  data,
  setCurrent,
  pageNumberLimit = 5,
  itemsPerPage = 5,
  ...props
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(pageNumberLimit);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(data?.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  useEffect(() => {
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    setCurrent(currentItems);
  }, [data, indexOfLastItem, indexOfFirstItem]);

  const handleClick = (id: any) => {
    setCurrentPage(Number(id));
  };

  const handleNextButton = () => {
    if (currentPage < data.length) {
      setCurrentPage(currentPage + 1);
      if (currentPage + 1 > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  };

  const handlePrevButton = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number.toString()}
          onClick={(e) => handleClick(e.currentTarget.id)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleGoOnButton = () => {
    if (currentPage < data.length) {
      setCurrentPage(maxPageNumberLimit + 1);
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handleGoBackButton = () => {
    if (minPageNumberLimit > 1) {
      setCurrentPage(minPageNumberLimit);
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const setLastPage = () => {
    setCurrentPage(pages.length);
    setMaxPageNumberLimit(pages.length);
    setMinPageNumberLimit(pages.length - pageNumberLimit);
  };

  return (
    <ul className="page-numbers" {...props}>
      <li>
        <button
          onClick={handlePrevButton}
          disabled={currentPage == pages[0] ? true : false}
        >
          prev
        </button>
      </li>
      {minPageNumberLimit >= 1 && (
        <li onClick={handleGoBackButton}>&hellip;</li>
      )}
      {renderPageNumbers}
      {pages.length > maxPageNumberLimit && (
        <>
          <li onClick={handleGoOnButton}>&hellip;</li>
          <li onClick={setLastPage}>{pages.length}</li>
        </>
      )}
      <li>
        <button
          onClick={handleNextButton}
          disabled={currentPage == pages[pages.length - 1] ? true : false}
        >
          next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
