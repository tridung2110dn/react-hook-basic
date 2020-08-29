import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  // pagination: _limit & _page
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.array,
};

Pagination.defaultProps = {
  onPageChange: null,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _limit, _page, _totalRows } = pagination;

  const lastPage = Math.ceil(_totalRows / _limit);

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  return (
    <div>
      <button
        className="btn-prev"
        disabled={_page <= 1}
        onClick={() => handlePageChange(_page - 1)}
      >
        Prev
      </button>

      <button
        className="btn-next"
        disabled={_page === lastPage}
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
