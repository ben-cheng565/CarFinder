"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleClick = () => {
    const newwLimit = (pageNumber + 1) * 10;
    const pathName = updateSearchParams("limit", `${newwLimit}`);

    router.push(pathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleClick}
        />
      )}
    </div>
  );
};

export default ShowMore;
