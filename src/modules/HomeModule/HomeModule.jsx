import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Swal from "sweetalert2";
import NotFound from "../../components/NotFound/NotFound";
import { DatetimeFormater } from "../../helpers/utils";
import useSWR from "swr";
import { fetchUsers } from "../../services/news.services";
import PaginationComponent from "../../components/Pagination/PaginationComponent";
import Input from "../../components/Input/Input";
import { CiSearch } from "react-icons/ci";
// import ActionsMenu from "../../components/ActionDropDown/ActionDropDown";
import { toast } from "react-toastify";
// import BasicModal from "@/src/Components/Modal/BasicModal";
import { debounce } from "../../helpers/utils";

const HomeModule = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState("all");
  const [search, setSearch] = useState("");
  const [popup, setPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    debounce(() => setDebouncedSearch(e.target.value), 300);
  };

  const {
    data: usersData,
    isLoading,
    mutate,
  } = useSWR(`/users/${currentPage}/${type}/${debouncedSearch}/`, () =>
    fetchUsers(type, {
      paginationLimits: 10,
      page: currentPage,
      name: debouncedSearch,
    })
  );


  useEffect(() => {
    setCurrentPage(1);
  }, [type]);

//   const deleteEventHandler = (id: string) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         acceptOrReject(id);
//       }
//     });
//   };
//   const edit = async (id: any, values: any) => {
//     let newData = structuredClone(usersData);
//     const index = newData?.data.findIndex((data: any) => data._id === id);
//     newData.data[index] = { ...newData.data[index], ...values };
//     const data = new FormData();

//     try {
//       for (let key in values) {
//         data.append(key, values[key]);
//       }
//       await mutate(() => editUser(id, data), {
//         optimisticData: newData,
//         rollbackOnError: true,
//         revalidate: false,
//         populateCache: false,
//         throwOnError: true,
//       });
//       if (Math.ceil(newData.count / 10) < currentPage && currentPage !== 1)
//         setCurrentPage((prevPage) => --prevPage);
//       toast.success("User updated Successfully.");
//       setEditPopup(false);
//     } catch (error) {
//       Swal.fire("Error!", "Something went wrong.", "error");
//     }
//   };

//   const editEvent = (id: any, values: any, type: string) => {
//     if (type === "edit") return edit(id, values);
//   };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex sm:flex-row flex-col justify-between md:gap-0 sm:gap-8 gap-4 sm:items-center">
          <h2 className="fs-32 font-Baloo font-black leading-7 text-blackrussian sm:leading-9">
            User Management
          </h2>
          <form className="flex xs:flex-col w-full sm:w-80 gap-5">
            <div className="relative form-group w-full">
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
          </form>
        </div>
        <>
          {" "}
          {isLoading ? (
            <Loader loading={isLoading} />
          ) : usersData?.count > 0 ? (
            <div className="overflow-hidden rounded-2xl overflow-x-auto bg-white">
              <table className="min-w-full at-tablestyle">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>Joining Date</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Phone No.</th>
                    <th>Zip code</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData?.data?.map((user, i) => (
                    <tr key={i}>
                      <td>
                        <div className="flex items-center gap-3 w-60">
                          <h3 className="fs-16 w-full truncate font-bold leading-6 text-martinique">
                            {user?.name && user?.name != ""
                              ? user?.name
                              : user?.email}
                          </h3>
                        </div>
                      </td>
                      <td className="text-secondary whitespace-nowrap">
                        {user?.email}
                      </td>
                      <td className="text-secondary whitespace-nowrap">
                        {DatetimeFormater(user?.createdAt)}
                      </td>
                      <td className="text-secondary whitespace-nowrap">
                        {user?.city || "N/A"}{" "}
                      </td>
                      <td className="text-secondary whitespace-nowrap">
                        {user?.state || "N/A"}{" "}
                      </td>
                      <td className="text-secondary whitespace-nowrap">
                        {user?.phone || "N/A"}
                      </td>
                      <td className="text-secondary whitespace-nowrap">
                        {user?.zipCode || "N/A"}
                      </td>
                      <td className="text-secondary">
                        <>
Action
                          {/* <ActionsMenu
                            deleteHandler={() => deleteEventHandler(user._id)}
                            editPayload={{
                              ...user,
                            }}
                            editPopup={editPopup}
                            setEditPopup={setEditPopup}
                            editEvent={editEvent}
                            handleShow={() => {}}
                          /> */}
                        </>
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
        {/* {!isLoading && usersData?.count > 0 && (
          <PaginationComponent
            pageCount={usersData?.count}
            paginationLimit={10}
            current_page={currentPage}
            pageChange={handlePageChange}
          />
        )} */}
        {/* {popup && (
          <BasicModal
            state={22}
            popup={popup}
            setPopup={setPopup}
            editEvent={editEvent}
          />
        )} */}
      </div>
    </>
  );
};

export default HomeModule;
