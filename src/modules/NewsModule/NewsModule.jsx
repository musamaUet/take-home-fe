import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import NotFound from "../../components/NotFound/NotFound";
import { DatetimeFormater, dateFormater } from "../../helpers/utils";
import useSWR from "swr";
import { fetchNews } from "../../services/news.services";
import PaginationComponent from "../../components/Pagination/PaginationComponent";
import Input from "../../components/Input/Input";
import { CiSearch } from "react-icons/ci";
import { debounce } from "../../helpers/utils";
import DatePickerComponent from "../../components/DatePicker/DatePicker";

const NewsModule = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    debounce(() => setDebouncedSearch(e.target.value), 300);
  };

  const {
    data: newsData,
    isLoading,
  } = useSWR(`/search/${currentPage}/${debouncedSearch}/${startDate}/${endDate}`, () =>
    fetchNews({
      pageSize: 10,
      page: currentPage,
      q: debouncedSearch,
      ...(startDate && { from: dateFormater(startDate) }),
      ...(endDate && { to: dateFormater(endDate) })
    })
  );

  console.log('newsData', newsData)

  useEffect(() => {
    setCurrentPage(1);
  }, [search, startDate, endDate]);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex sm:flex-row flex-col justify-between md:gap-0 sm:gap-8 gap-4 sm:items-center">
          <h2 className="fs-32 font-Baloo font-black leading-7 text-blackrussian sm:leading-9">
            The News
          </h2>
          <form className="flex xs:flex-col w-50 gap-5">
            <div className="relative form-group w-50">
              <Input
                value={search}
                onChange={handleSearchChange}
                placeholder="Search"
                className="!pl-12 border !border-[#e5e5e5] rounded-lg form-control"
              />
              <span className="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer">
                <CiSearch className="text-2xl text-dolphin" />
              </span>
            </div>
            <div className="flex flex-col w-50 gap-2">
              <DatePickerComponent
                name="date"
                value={startDate}
                labelclassName="!left-1"
                placeholder={"From Date"}
                onDateChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="flex flex-col w-50 gap-2">
              <DatePickerComponent
                name="date"
                value={endDate}
                labelclassName="!left-1"
                placeholder={"To Date"}
                onDateChange={(value) => setEndDate(value)}
              />
            </div>
          </form>
        </div>
        <>
          {" "}
          {isLoading ? (
            <Loader loading={isLoading} />
          ) : newsData?.totalResults > 0 ? (
            <div className="overflow-hidden rounded-2xl overflow-x-auto bg-white">
              <table className="min-w-full at-tablestyle">
                <thead>
                  <tr>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Published Date</th>
                    <th>Description</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {newsData?.articles?.map((data, i) => (
                    <tr key={i}>
                      <td>
                        <div className="flex items-center gap-3 w-60">
                          <h3 className="fs-16 w-full truncate font-bold leading-6 text-martinique">
                            {data?.author ?? ""}
                          </h3>
                        </div>
                      </td>
                      <td className="text-secondary whitespace-nowrap">
                        {data?.title}
                      </td>
                      <td className="text-secondary whitespace-nowrap">
                        {DatetimeFormater(data?.publishedAt)}
                      </td>
                      <td className="text-secondary whitespace-nowrap">
                        {data?.description || "N/A"}{" "}
                      </td>
                      <td className="text-secondary whitespace-nowrap">
                        {data?.url}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <NotFound />
          )}
        </>
        {!isLoading && newsData?.totalResults > 0 && (
          <PaginationComponent
            pageCount={newsData?.totalResults}
            paginationLimit={10}
            current_page={currentPage}
            pageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
};

export default NewsModule;
