import { PayPalButtons } from "@paypal/react-paypal-js";
import { useAuth } from "../../hooks/useAuth";

export const PayPalButton = ({ invoice, totalValue }) => {

    const { setPaypalStatus } = useAuth();

    const approve = async (data, actions) => {
        //alert('entro a approve')
        try {
          const order = await actions.order?.capture ();
          console.log ('PAYPAL', order)
          setPaypalStatus([{status: 'success' ,messagge: 'Pago Exitoso'}]);
          //alert(`order: ${order}`)
          
          }
        catch (error) {
            //alert('fallo paypal')
            console.log (error)
            setPaypalStatus([{status: 'danger' , messagge: 'Hemos tenido un problema con su Pago'}])
          
          }
        }
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
