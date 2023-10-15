import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import { Pagination } from "../../components/card/Pagination";
import "./productList.css";
import { useProduct } from "../../hooks/useProduct";

export const ProductList = () => {
  const { products } = useProduct();
  // console.log(products.length);
  // const globalContext = useContext(ProductsContext);

  // const {productsData,getProducts} = globalContext;
  const totalProducts = products.length;

  const [productsPerPage, setProductsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * productsPerPage;
  const fisrstIndex = lastIndex - productsPerPage;

  useEffect(() => {
    // getProducts();
  }, []);
  function FormatCLP(price) {
    return new Intl.NumberFormat().format(price);
  }
  return (
    <>
      <div className="card-container">
        <Row className="g-4" xs={1} md={4}>
          {products
            .map((product) => (
              <div className="card" key={product.id}>
                <figure className="figure">
                  <img src={product.imagen} alt={product.descripcion} />
                </figure>
                <div className="card-body">
                  <h4 className="card-title">{product.nombre}</h4>
                  <h4 className="price">
                    {" "}
                    <strong>${FormatCLP(product.valor)}</strong>
                  </h4>
                  <button className="btn btn-primary">Añadir al Carrito</button>
                </div>
              </div>
            ))
            .slice(fisrstIndex, lastIndex)}
        </Row>
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />
    </>
  );
};
