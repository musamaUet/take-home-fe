import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { MdOutlineArrowDropDown } from 'react-icons/md';

export default function Select({ timelines, selectedTimeline, setSelectedTimeline }) {

  return (
    <div className="relative w-36 xs:w-full">
      <Listbox value={selectedTimeline} onChange={setSelectedTimeline}>
        <div className="relative">
          <Listbox.Button className="relative w-full py-2.5 truncate bg-white text-left pl-4 pr-7 cursor-pointer border !border-[#e5e5e5] rounded-lg">
            <span className="block truncate text-blackrussian w-full">{selectedTimeline.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <MdOutlineArrowDropDown
                className="h-5 w-5 text-[#202631]"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-30 mt-1 max-h-60 w-full overflow-auto shadow-lg rounded-lg bg-white text-left p-2">
              {timelines.map((timeline, id) => (
                <Listbox.Option
                  key={id}
                  className={({ active }) =>
                    `relative select-none cursor-pointer rounded-md text-base px-2 py-2 text-blackrussian hover:text-white hover:bg-primary ${
                      active ? '' : ''
                    }`
                  }
                  value={timeline}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate leading-6 ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {timeline.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}