import React, { useState } from "react";
import Pagination from "rc-pagination";

const PaginationComponent = ({
  pageCount,
  pageChange,
  current_page,
  paginationLimit,
  className,
}) => {
  const arrowPath =
    "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h" +
    "-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v" +
    "60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91" +
    ".5c1.9 0 3.8-0.7 5.2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z";

  const getSvgIcon = (
    path,
    reverse,
    type
  ) => {
    const paths = Array.isArray(path) ? path : [path];
    const renderPaths = paths.map((p, i) => (
      <path key={i} d={p} />
    ));
    return (
      <i className={`custom-icon-${type}`}>
        <svg
          viewBox="0 0 1024 1024"
          width="0.85em"
          height="0.85em"
          fill="currentColor"
          style={{
            verticalAlign: "-.125em",
            transform: `rotate(${(reverse && 180) || 0}deg)`,
          }}
        >
          {renderPaths}
        </svg>
      </i>
    );
  };
  const nextIcon = getSvgIcon(arrowPath, false, "next");
  const prevIcon = getSvgIcon(arrowPath, true, "prev");
  const [useIcon, setUseIcon] = useState(true);
  const iconsProps = useIcon ? { prevIcon, nextIcon } : {};

  return (
    <Pagination
      {...iconsProps}
      total={pageCount}
      onChange={pageChange}
      current={current_page}
      pageSize={paginationLimit}
      className={`rt-pagination flex mb-0 justify-end gap-2 w-full ${className}`}
    />
  );
};

export default PaginationComponent;
