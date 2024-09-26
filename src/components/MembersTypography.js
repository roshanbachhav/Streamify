import React from "react";
import { POSTER_URL } from "../utils/constants";

const MembersTypography = ({members}) => {
  const { profile_path, known_for_department, name } = members;
  return (
    <div className="about-cast text-center mx-4 my-6">
      <div className="inline-block border-0 rounded-full ring-4 ring-gray-300 shadow-lg overflow-hidden h-48 w-48 transition-transform duration-300 transform hover:scale-105">
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src={POSTER_URL + profile_path}
          alt="cast-member-image"
        />
      </div>
      <div className="about-cast-members mt-4">
        <p className="text-sm tracking-wide leading-tight mb-1">
          Role: {known_for_department}
        </p>
        <h1 className="text-lg font-semibold tracking-tight leading-none">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default MembersTypography;
