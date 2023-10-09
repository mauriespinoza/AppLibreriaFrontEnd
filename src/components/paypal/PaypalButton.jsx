import { PayPalButtons } from "@paypal/react-paypal-js";

export const PaypalButton = ({ invoice, totalValue }) => {

    const approve = async (data, actions) => {
        
        try {
          const order = await actions.order?.capture ()
          console.log ('>>> PAYPAL', order)
          }
        catch (error) {
          console.log (error)
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
