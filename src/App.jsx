
import { MainRoutes } from "./router/MainRoutes";
import { CategorieState } from "./context/CategorieState";
import { ProductState } from "./context/ProductState";
import "./App.css";
import { ProductosProvider } from "./context/ProductosContext";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <>
      <ProductosProvider>
        <AuthProvider>
          <CategorieState>
            <ProductState>
              <MainRoutes />
            </ProductState>
          </CategorieState>
        </AuthProvider>
      </ProductosProvider>
    </>
  );
}

export default App;
