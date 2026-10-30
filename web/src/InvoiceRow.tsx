import {Invoice} from "./interfaceType";
import {formatCurrency, formatDate,formatStatus} from "./utils";
  


interface InvoiceRowProps {
  props: Invoice;
}


export function InvoiceRow(data: InvoiceRowProps) {
  const { props } = data;
  return (
    <tr>
      <td> {props.customer.name} </td>
      <td> {formatCurrency(props.ammount)} </td>
      <td> {formatDate(props.issuedDate.toString())} </td>
      <td> {formatDate(props.dueDate.toString())} </td>
      <td> {formatStatus(props.status)} </td>
    </tr>
  );
}