import { Route, Routes } from "react-router-dom"
import { NavBar } from '../components/navbar/NavBar';
import { HomePage } from '../views/pages/HomePage'
import {Products} from '../views/pages/Products_';
import { ProductByCategorie } from "../views/pages/ProductByCategorie";
import { ProductDetails } from "../components/products/ProductDetails";
import { LoginForm } from "../views/pages/LoginForm";
import { Cart } from "../views/pages/Cart";
import { RegisterPage } from "../views/pages/RegisterPage";
import {EditUserInfo} from "../views/pages/EditUserInfo";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { ProductById } from "../views/pages/ProductById";
// import {ProductosProvider} from '../context/ProductosContext'
// import {CategorieProvider} from '../context/CategorieContext'


export const MainRoutes = () => {
    return (
      <>
      {/* <ProductosProvider> */}
      {/* <CategoriesProvider> */}
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:categorie" element={<ProductByCategorie />} />
          <Route path="/productosbyid/:id" element={<ProductById />} />
          <Route path="/login/" element={<LoginForm />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/register/" element={<RegisterPage />} />
          <Route path="*" element={<h1>Error 404 - Ruta no encontrada</h1>} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/datos" element={<EditUserInfo/>}/>
          </Route>
          
        </Routes>
        {/* </CategoriesProvider> */}
        {/* </ProductosProvider> */}
      </>
    );
}