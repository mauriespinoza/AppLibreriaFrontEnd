import { PayPalButtons } from "@paypal/react-paypal-js";
import { useAuth } from "../../hooks/useAuth";

export const PayPalButton = ({ invoice, totalValue }) => {
  const { setPaypalStatus, setIdPaypal } = useAuth();

  const approve = async (data, actions) => {
    try {
      const order = await actions.order?.capture();
      const { id } = order;
      setPaypalStatus([
        {
          status: "success",
          messagge:
            "Pago Exitoso, en unos segundos serás redirigido a la página principal",
        },
      ]);
      setIdPaypal(id);
    } catch (error) {
      setPaypalStatus([
        { status: "danger", messagge: "Hemos tenido un problema con su Pago" },
      ]);
    }
  };
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: invoice,
              amount: {
                value: totalValue,
              },
            },
          ],
        });
      }}
      onApprove={approve}
    />
  );
};
