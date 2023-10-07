import { useReducer, useState } from "react";
import ProductContext from "./ProductContext";
import { productReducer } from "./ProductReducer";
import { axiosClient } from "../config/api";
export const ProductState = ({ children }) => {
  const initialState = {
    products: [],
  };
  const [productsState, setProductsState] = useState([]);

  // console.log("children: " + JSON.stringify(children))
  const [globalState, dispatch] = useReducer(productReducer, initialState);
  //obtenemos los productos desde la BD
  const getProducts = async () => {
    try {
      const response = await axiosClient.get("/products");
      // console.log(`getCategories.response: ${response}`);
      console.log("getProducts.response: " + JSON.stringify(response));
      // setProductsState(response.data);
      dispatch({
        type: "GETS_PRODUCTS",
        payload: response.data,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  //obtenemos los productos desde la BD
  const getProductByCategory = async (category) => {
    try {
      const response = await axiosClient.get(`/productscategory/${category}`);
      // console.log(`getCategories.response: ${response}`);
      console.log("getProductByCategory.response: " + JSON.stringify(response));
      // setProductsState(response.data);
      dispatch({
        type: "GETS_PRODUCTS_CATEGORY",
        payload: response.data,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // <ProductContext.Provider
    //     value={{
    //       products: globalState.products,
    //         getProducts
    //     }}>
    // {children}</ProductContext.Provider>
    <ProductContext.Provider
      value={{
        products: globalState.products,
        getProducts,
        getProductByCategory
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
