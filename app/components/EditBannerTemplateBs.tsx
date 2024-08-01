import React, { useState, useEffect } from "react";
import { BannerProps } from "./BannerImageComp";
import BannerDisplay from "./BannerDisplay";
import { existingPhotos } from "../data/photos";
import Image from "next/image";

interface EditBannerProps {
  banner: BannerProps | null;
  onSave: (banner: BannerProps) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({
  banner,
  onSave,
  onClose,
}) => {
  const [editedBanner, setEditedBanner] = useState<BannerProps | null>(null);
  const [visible, setVisible] = useState(false);
  const [photos, setPhotos] = useState<string[]>(existingPhotos);

  useEffect(() => {
    if (banner) {
      setEditedBanner(banner);
      setTimeout(() => {
        setVisible(true);
      }, 100);
    }
  }, [banner]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editedBanner) {
      setEditedBanner({ ...editedBanner, [name]: value } as BannerProps);
    }
  };

  const handleSave = () => {
    setVisible(false);
    setTimeout(() => {
      if (editedBanner) onSave(editedBanner);
      onClose();
    }, 600);
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  const handlePhotoSelect = (photo: string) => {
    if (editedBanner) {
      setEditedBanner({ ...editedBanner, image: photo } as BannerProps);
    }
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          const newPhoto = reader.result as string;
          setPhotos([newPhoto, ...photos]);
          setEditedBanner({ ...editedBanner, image: newPhoto } as BannerProps);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (!editedBanner) return null;

  return (
    <div className="bg-gray-900 bg-opacity-75 fixed inset-0 flex items-center justify-center p-4 sm:p-8">
      <div
        className={`fixed inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out transform ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}>
        <div className="relative bg-white p-6 border border-gray-300 rounded-xl w-full max-w-md h-3/4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-md text-gray-500 ">Edit Banner</h2>
            <button
              onClick={handleClose}
              className=" transition-transform duration-300 hover:scale-125">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#808080">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </div>
          <div className="overflow-y-auto no-scrollbar h-full pb-14 sm:pb-6">
            <div className="relative mx-10 ">
              <BannerDisplay
                id={editedBanner.id}
                title={editedBanner.title}
                description={editedBanner.description}
                cta={editedBanner.cta}
                image={editedBanner.image}
                background={editedBanner.background}
                width={true}
              />
            </div>
            <div className="mt-7">
              <h3 className="text-sm text-gray-500 mb-2">Images</h3>
              <div className="flex overflow-x-auto space-x-1.5 pb-4 w-full">
                <label className="flex-shrink-0 cursor-pointer w-16 h-16 flex items-center justify-center rounded-full border-2 border-dashed border-gray-400 hover:border-blue-500">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleUpload}
                  />
                  <Image
                    width={720}
                    height={720}
                    src="/images/upload-icon.webp"
                    alt="Upload"
                  />
                </label>
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="relative w-16 h-16 flex-shrink-0 cursor-pointer overflow-hidden rounded-full border-2 border-transparent hover:border-blue-500"
                    onClick={() => handlePhotoSelect(photo)}>
                    <Image
                      width={720}
                      height={720}
                      src={photo}
                      alt={`Existing photo ${index}`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            <label className="text-sm text-gray-500" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={editedBanner.title}
              onChange={handleChange}
              className="block w-full p-1 mb-4 border mt-2 border-gray-300 rounded"
            />
            <label className="text-sm text-gray-500 " htmlFor="description">
              Description
            </label>
            <input
              name="description"
              placeholder="Description"
              value={editedBanner.description}
              onChange={handleChange}
              className="block w-full p-1 mb-4 border mt-2 border-gray-300 rounded"
            />
            <label className="text-sm text-gray-500" htmlFor="cta">
              Button Text
            </label>
            <input
              type="text"
              name="cta"
              placeholder="CTA"
              value={editedBanner.cta}
              onChange={handleChange}
              className="block w-full p-1 mb-6 border mt-2 border-gray-300 rounded"
            />
          </div>
        </div>
        <div
          className={`absolute bg-white w-full max-w-md bottom-12 rounded-2xl px-5 pt-5 pb-1 flex flex-col items-center transform transition-opacity duration-700 ease-in-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}>
          <button
            onClick={handleSave}
            className="bg-[rgb(41,71,68)] hover:bg-[rgb(81,126,121)] text-white py-3 px-4 rounded-lg w-full mx-10 mb-5">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
