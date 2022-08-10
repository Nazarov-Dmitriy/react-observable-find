import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchField } from "../actions/actionsCreates";

export default function Skills() {
  const { items, loading, error, search } = useSelector(
    (state) => state.skills
  );
  const dispatch = useDispatch();

  const handleSearch = (evt) => {
    const { value } = evt.target;
    dispatch(changeSearchField(value));
  };

  const SearchNotFound = () => {
    if ((!items.length && hasQuery && !loading) || !hasQuery ) {
      return <div>Type something to search</div>;
    }
  };

  const hasQuery = search.trim() !== "";
  console.log(!items.length && hasQuery);
  console.log(!hasQuery);

  return (
    <>
      <div>
        <input type="search" value={search} onChange={handleSearch} />
      </div>
      <SearchNotFound />
      {hasQuery && loading && <div>searching...</div>}
      {error ? (
        <div>Error occured</div>
      ) : (
        <ul>
          {items?.map((o) => (
            <li key={o.id}>{o.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
