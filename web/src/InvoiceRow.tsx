import {Invoice} from "./interfaceType";

interface InvoiceRowProps {
  props: Invoice;
}


export function InvoiceRow(data: InvoiceRowProps) {
  const { props } = data;
  return (
    <tr>
      <td> {props.customer.name} </td>
      <td> {props.ammount} </td>
      <td> {props.issuedDate} </td>
      <td> {props.status} </td>
    </tr>
  );
}