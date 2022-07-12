import { createContext, useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

const COLLECTIONS = gql`
  query GetCollections {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
  }
`;
//provider alias component
export const CategoriesProvider = ({ children }) => {
  const { loading, error, data } = useQuery(COLLECTIONS);
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    if (data) {
      const { collections } = data;
      const collectionsMap = collections.reduce((acc, collection) => {
        const { title, items } = collection;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {});
      setCategoriesMap(collectionsMap);
    }
  }, [data]);
  const valueSharer = { categoriesMap, setCategoriesMap, loading };

  return (
    <CategoriesContext.Provider value={valueSharer}>
      {children}
    </CategoriesContext.Provider>
  );
};
