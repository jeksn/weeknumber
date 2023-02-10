"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="w-full md:w-auto mx-auto md:mx-0 absolute bottom-10 md:left-10 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="border-white border rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all ease-in-out duration-500"
        >
          What is this?
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
    {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div className="fixed inset-0 overflow-y-auto">
    <div className="fixed inset-0 bg-white/5" aria-hidden="true" />
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    What is this?
                  </Dialog.Title>
                  <div className="flex flex-col mt-2">
                    <p className="text-sm text-white">
                      This is a small site just to show what week number it is. Nothing more nothing less.
                      <br />
                      <br />
                      <span className="mt-4 text-sm">Made by: <a href="https://jeksn.me" className="opacity-80 hover:opacity-100 transition-all ease-in-out duration-300">@jeksn</a></span>
                    </p>
                  </div>

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
