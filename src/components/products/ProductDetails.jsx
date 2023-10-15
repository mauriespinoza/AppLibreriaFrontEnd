
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Footer } from "../footer/Footer";

export const ProductDetails = () => {
  const { count, setCount, addQtyToCart } = useProduct();

  const { id } = useParams();
  console.log("id:" + id);
  const { product, getProductById } = useProduct();
  useEffect(() => {
    getProductById(id);
    if (count == 0) {
      setCount(1);
    } else {
      setCount(1);
    }
  }, [id]);

  function FormatCLP(price) {
    return new Intl.NumberFormat().format(price);
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            gap: { xs: 0, md: 6 },
          }}
          elevation={0}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: "250px", md: "300px", lg: "400px" },
              borderRadius: "12px",
              border: "1px solid #000000",
              padding: 2,
            }}
            image={product.imagen}
            alt={product.descripcion}
          />
          <CardContent
            sx={{
              display: "flex",
              flexFlow: "column wrap",
              gap: 2,
              alignItems: { xs: "center", md: "start" },
            }}
          >
            <Typography component="div" variant="h1" fontSize={28}>
              {product.nombre}
            </Typography>
            <Typography variant="p" color="text.secondary" component="p">
              {product.descripcion}
            </Typography>
            <Typography
              variant="p"
              fontWeight="bold"
              color="text.secondary"
              component="p"
            >
              Stock:{" "}
              <Typography component="span">{product.cantidad} </Typography>
            </Typography>
            <Typography component="div" variant="h4" color="orange">
              $ {FormatCLP(product.valor)}
            </Typography>
            <Typography
              variant="p"
              fontWeight="bold"
              color="text.secondary"
              component="p"
            >
              Disponibilidad:{" "}
              <Typography component="span">Solo retiro en tienda</Typography>
            </Typography>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button>{count}</Button>

              <Button
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
            <div>
              <Button
                variant="contained"
                onClick={() => {
                  addQtyToCart({ ...product, count, setCount });
                }}
              >
                Añadir al Carrito
              </Button>
            </div>
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </>
  );
};
