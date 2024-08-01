"use client";

import { useState, useCallback } from "react";
import BannerImageComp, { BannerProps } from "./components/BannerImageComp";
import EditBannerTemplateBs from "./components/EditBannerTemplateBs";
import adBanners from "./data/adBanners.json";

const Home: React.FC = () => {
  const [banners, setBanners] = useState<BannerProps[]>(
    adBanners as BannerProps[]
  );
  const [editingBanner, setEditingBanner] = useState<BannerProps | null>(null);

  const handleEdit = useCallback(
    (id: number) => {
      const banner = banners.find((b) => b.id === id);
      if (banner) {
        setEditingBanner({ ...banner, onEdit: () => {} });
      }
    },
    [banners]
  );

  const handleSave = useCallback(
    (updatedBanner: BannerProps) => {
      setBanners(
        banners.map((b) => (b.id === updatedBanner.id ? updatedBanner : b))
      );
      setEditingBanner(null);
    },
    [banners]
  );

  const handleClose = useCallback(() => {
    setEditingBanner(null);
  }, []);

  return (
    <>
      <div className="flex justify-center mt-5 text-white underline underline-offset-2">
        Click on
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -1120 820 1120"
          width="20px"
          fill="#ffffff">
          <path d="M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z" />
        </svg>
        icon to edit the banners
      </div>
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-2 grid-cols-1 my-7">
          {banners.map((banner, index) => (
            <div
              className="hover:scale-105 transition-transform duration-300"
              key={index}>
              <BannerImageComp
                key={banner.id}
                {...banner}
                onEdit={handleEdit}
              />
            </div>
          ))}
          {editingBanner && (
            <EditBannerTemplateBs
              banner={editingBanner}
              onSave={handleSave}
              onClose={handleClose}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
