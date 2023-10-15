import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PayPalScriptProvider
    options={{
      "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PayPalScriptProvider>
);
