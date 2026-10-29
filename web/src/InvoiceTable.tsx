import {Invoice} from "./interfaceType";
import {InvoiceRow} from "./InvoiceRow";

interface InvoiceTableProps {
  datas: Invoice[];
}

export default function InvoiceTable(datas: InvoiceTableProps) {
  return <>
  <table>
    <thead>
      <tr>
        <th>Cliente</th>
        <th>Valor</th>
        <th>Emissão</th>
        <th>Situação</th>
      </tr>
    </thead>
    <tbody>
      {datas.datas.map((invoice) => (
        <InvoiceRow key={invoice.id} props={invoice} />
      ))}
    </tbody>

  </table>;</>
}