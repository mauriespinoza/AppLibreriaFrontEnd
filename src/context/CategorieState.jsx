import { useReducer } from "react";
import CategoriesContext from "./CategorieContext";
import { categorieReducer } from "./CategorieReducer";
import { axiosClient } from "../config/api";
export const CategorieState = ({ children }) => {
  console.log("Children: " + children);

  const initialState = {
    categories: [],
  };

  const [globalState, dispatch] = useReducer(categorieReducer, initialState);

  //obtenemos las categorias desde la BD
  const getCategories = async () => {
    try {
      const response = await axiosClient.get("/categories");

      dispatch({
        type: "GETS_CATEGORIES",
        payload: response.data,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CategoriesContext.Provider
      value={{
        categories: globalState.categories,
        getCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
