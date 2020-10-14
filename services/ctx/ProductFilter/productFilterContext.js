import { createContext, useContext } from "react";

const ProductFilterContext = createContext({});

export const ProductFilterProvider = ProductFilterContext.Provider;

export const ProductFilterConsumer = ProductFilterContext.Consumer;

export const useProductFilter = () => useContext(ProductFilterContext);
