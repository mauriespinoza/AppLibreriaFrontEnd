import { PayPalButtons } from "@paypal/react-paypal-js";

export const PayPalButton = ({ invoice, totalValue }) => {

    const approve = async (data, actions) => {
        alert('entro a approve')
        try {
          const order = await actions.order?.capture ()
          alert(`order: ${order}`)
          console.log ('>>> PAYPAL', order)
          }
        catch (error) {
            alert('fallo paypal')
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
                value: 1000,
              },
            },
          ],
        });
      }}
      onApprove={approve}
    />
  );
};
