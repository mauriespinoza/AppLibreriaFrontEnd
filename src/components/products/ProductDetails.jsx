
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
//import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Footer } from "../footer/Footer";
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
//import "./productDetails.css";
export const ProductDetails = () => {

  const {  removeFromCart, addToCart, count, setCount, addQtyToCart } = useProduct();
   // {id,nombre, descripcion,img,precio}
   const {id} = useParams();
    console.log("id:" + id);
    const {product, getProductById} = useProduct();
    useEffect(() => {
        // getProductsCategory();
        getProductById(id);
        if(count == 0){
          setCount(1);
        } else {
          setCount(1);
        }
     }, [id]);

     function FormatCLP(price) {
        return new Intl.NumberFormat().format(price);
      }
  return (
    // <div className="card">
    //     <div className="card-image">
    //         <img src={products.imagen} alt={id} />
    //     </div>
    //     <div className="card-info">
    //         <h2>{products.nombre}</h2>
    //         <p>{products.descripcion}</p>
    //         <p>{products.valor}</p>
    //         <button className="btn btn-primary">Añadir al Carritooo</button>
    //     </div>
    // </div>
    <>
    <Box sx={{display:'flex' , justifyContent:'center', alignItems:'center', height:'90vh'}}>

    
    <Card sx={{ display: 'flex', flexFlow: 'row wrap', justifyContent:'center', gap:{xs:0,md:6}}} elevation={0}>
      {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}> */}
      <CardMedia
        component="img"
        sx={{ width: {xs: '250px', md: '300px', lg:'400px'} , borderRadius:'12px', border:'1px solid #000000', padding:2}}
        image={product.imagen}
        alt={product.descripcion}
      />
        <CardContent sx={{ display:'flex', flexFlow:'column wrap' ,gap:2, alignItems:{xs:'center', md:'start'} }}>
          <Typography component="div" variant="h1" fontSize={28}>
          {product.nombre}
          </Typography>
          <Typography variant="p" color="text.secondary" component="p">
          {product.descripcion}
          </Typography>
          <Typography variant="p" fontWeight='bold' color="text.secondary" component="p">
          Stock: <Typography component='span'>{ product.cantidad} </Typography> 
          </Typography>
          <Typography component="div" variant="h4" color="orange">
          $ {FormatCLP(product.valor)}
          </Typography>
          <ButtonGroup>
          {/* <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          > */}
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button>
            {count}
          </Button>
          {/* <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          > */}
           <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }} >
           
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
        <div>
        <Button  variant="contained" onClick={() => {addQtyToCart({...product,count,setCount})}}>Añadir al Carrito</Button>
        </div>
          
        </CardContent>
      {/* </Box> */}
      
    </Card>
    </Box>
    <Footer/>
    
    </>
  )
}
