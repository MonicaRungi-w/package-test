import React, { PropsWithChildren, useEffect, useState } from "react";

import "./../common.css";
import "./Pagination.css";

export interface PaginationProps extends PropsWithChildren {
  data: any[];
  setCurrent?: (data: any[]) => void;
  pageNumberLimit?: number;
  itemsPerPage?: number;
  dataSize: number;
  offset?: number;
  setOffset?: (n: number) => void;
}

const Pagination = ({
  data,
  setCurrent,
  pageNumberLimit = 5,
  itemsPerPage = 5,
  dataSize,
  offset,
  setOffset,
  ...props
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(pageNumberLimit);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  useEffect(() => {
    if (setCurrent) {
      const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
      setCurrent(currentItems);
    }
  }, [data, indexOfLastItem, indexOfFirstItem]);

  useEffect(() => {
    if (setOffset) {
      setOffset(itemsPerPage * (currentPage - 1));
    }
  }, [currentPage]);

  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(dataSize / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (id: any) => {
    setCurrentPage(Number(id));
  };

  const handleNextButton = () => {
    if (currentPage < dataSize) {
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
    if (currentPage < dataSize) {
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

  const setFirstPage = () => {
    setCurrentPage(1);
    setMaxPageNumberLimit(pageNumberLimit);
    setMinPageNumberLimit(0);
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
        <>
          <li onClick={setFirstPage}>{1}</li>
          <li onClick={handleGoBackButton}>&hellip;</li>
        </>
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
