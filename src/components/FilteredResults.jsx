import React from "react";

import { dummydata } from "./dummydata";
import "../css/Results.css";

export const FilteredResults = () => {
  const searchRegex = new RegExp("haus", "gmi");
  return (
    <div>
      {dummydata
        .filter(({ title, description, href }) =>
          searchRegex.exec(
            JSON.stringify([description, href, title]).replace(
              /\,|\"|\[|\]|\:/gm,
              ""
            )
          )
        )
        .map((x, i) => {
          return (
            <ul className="result-list">
              <li className="result-list" key={i}>
                <a className="result-list" href={x.href}>
                  <div className="list-item-title">{x.title}</div>
                  <br />
                </a>
                <p className="list-item-description">{x.description}</p>
              </li>
            </ul>
          );
        })}
    </div>
  );
};
