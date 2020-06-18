import React from "react";
import { useSelector } from "react-redux";
import GrantCard from "./grantCards/GrantCard.jsx";

export default function WritersFavoriteGrants() {
  const favs = useSelector((state) => state.favorites.favorites);

  return (
    <div>
      {favs.map((grant) => {
        return (
          <div className="Card-display" key={grant.id}>
            <br />
            <GrantCard data={grant} />
          </div>
        );
      })}
    </div>
  );
}
