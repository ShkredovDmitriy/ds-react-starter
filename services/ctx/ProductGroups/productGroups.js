import { createContext, useContext } from "react";

const ProductGroupsContext = createContext({});

export const ProductGroupsProvider = ProductGroupsContext.Provider;

export const ProductGroupsConsumer = ProductGroupsContext.Consumer;

export const useProductGroups = () => useContext(ProductGroupsContext);
