import Swal from "sweetalert2";
import { Fragment, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import BasicModal from "../Modal/BasicModal";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Menu, Transition } from "@headlessui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { permissionIdentifier } from "@/src/helpers/permissionHelper";
import { useSelector } from "react-redux";
import { selectAdmin } from "@/src/redux/slices/adminSlice";
import { EPermissions, PERMISSION_NAMES } from "@/src/constants/permissions.constant";

const { breed_management } = EPermissions;
const { EDIT, DELETE } = PERMISSION_NAMES;

interface IProps {
  deleteHandler: any;
  editPayload: any;
  modalId: number;
  showEdit?: boolean;
  showDelete?: boolean;
  editText?: string;
  mutate?: Function;
  onBlock?: Function;
}

export default function ActionDropDown({
  deleteHandler,

  mutate,
  editPayload,
  modalId,
  showEdit = true,
  showDelete = true,
  editText = "Edit",
  onBlock,
}: IProps) {
  const { profile } = useSelector(selectAdmin);

  const isEditable = permissionIdentifier(profile?.permissions?.permissions[breed_management], EDIT);
  const isDeleteable = permissionIdentifier(profile?.permissions?.permissions[breed_management], DELETE);

  const [popup, setPopup] = useState(false);
  const [state, setState] = useState(0);

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="text-2xl">
        <BiDotsVerticalRounded />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="w-48 rt-actionmenu rounded-lg bg-white shadow-lg z-10 absolute right-0">
          <div className="p-3 space-y-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "text-white bg-primary" : "text-blackrussian"
                  } ${isEditable ? '': 'disable'} flex w-full gap-2 items-center rounded-lg px-2 py-2 text-lg leading-5`}
                  onClick={() => {
                    setState(modalId);
                    setPopup(true);
                  }}
                >
                  <FaRegEdit />
                  <span>{editText}</span>
                </button>
              )}
            </Menu.Item>
            {showDelete && (
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "text-white bg-primary " : "text-blackrussian"
                    } ${isDeleteable ? '':'disable'} flex w-full gap-2 items-center rounded-lg  px-2 py-2 text-lg leading-5`}
                    onClick={deleteHandler}
                  >
                    <RiDeleteBin5Line />
                    <span>Delete</span>
                  </button>
                )}
              </Menu.Item>
            )}
          </div>
        </Menu.Items>
      </Transition>
      {setPopup && (
        <BasicModal
          state={26}
          popup={popup}
          mutate={mutate}
          setPopup={setPopup}
          setState={setState}
          editPayload={editPayload}
          onBlock={onBlock}
        />
      )}
    </Menu>
  );
}
