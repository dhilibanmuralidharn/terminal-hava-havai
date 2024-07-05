import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { FiUpload } from "react-icons/fi";

export default function Modal({ isModalOpen, onCloseModal }) {
  return (
    <Dialog open={isModalOpen} onClose={onCloseModal} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-left sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>
              <div className="mt-3 text-left sm:mt-5">
                <DialogTitle
                  as="h3"
                  className="text-base font-semibold leading-6 text-gray-900 modal-heading pb-2"
                >   
                  Terminal Title
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Description</p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 modal-btn-container">
              <button type="button" className="upload-button">
                <FiUpload /> Upload image
              </button>
              <div>
                <button className="cancel-button">Cancel</button>
                <button className="continue-button">Continue</button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
