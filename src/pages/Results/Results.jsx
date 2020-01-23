import React from "react";
import { ResultNavigation, FilteredResults } from "../";

export const Results = () => {
  return (
    <div className="results-wrapper">
      <ResultNavigation />
      <FilteredResults />
    </div>
  );
};
