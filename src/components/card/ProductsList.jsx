import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import "./productList.css";
import ProductsContext from "../../context/ProductContext";
import { useProduct } from "../../hooks/useProduct";
import Typography from "@mui/material/Typography";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { getProductById, addToCart, count } = useProduct();
  const navigate = useNavigate();

  // console.log(products.length);
  const globalContext = useContext(ProductsContext);

  const { getProducts } = globalContext;

  const getAllProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const [productsPerPage, setProductsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * productsPerPage;
  const fisrstIndex = lastIndex - productsPerPage;

  useEffect(() => {
    getAllProducts();
  }, []);

  function FormatCLP(price) {
    return new Intl.NumberFormat().format(price);
  }

  return (
    <>
      <Typography
        variant="p"
        className="title"
        fontWeight="bold"
        fontSize={36}
        color="text.primary"
        component="p"
      >
        Los más Vendidos
      </Typography>
      <div className="card-container">
        <Row className="g-4" xs={1} md={4}>
          {products
            .map((product) => (
              <div className="card" key={product._id}>
                <figure className="figure">
                  <img
                    className="card-img"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      getProductById(product._id),
                        navigate(`/productosbyid/${product._id}`);
                    }}
                    src={product.imagen}
                    alt={product.descripcion}
                  />
                </figure>
                <div className="card-body">
                  <h4 className="card-title">{product.nombre}</h4>
                  <h4 className="price">
                    {" "}
                    <strong>${FormatCLP(product.valor)}</strong>
                  </h4>
                  <button
                    onClick={() => {
                      addToCart({ ...product, count });
                    }}
                    className="btn btn-primary"
                  >
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            ))
            .slice(fisrstIndex, lastIndex)}
        </Row>
      </div>
      {/* <Pagination/> */}
    </>
  );
};
