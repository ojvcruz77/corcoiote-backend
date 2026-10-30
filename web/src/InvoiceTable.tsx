import {Invoice} from "./interfaceType";
import {InvoiceRow} from "./InvoiceRow";

interface InvoiceTableProps {
  datas: Invoice[];
}

export default function InvoiceTable(datas: InvoiceTableProps) {
  return <>
  <table style={{borderCollapse: 'collapse', width: '100%', backgroundColor: '#1E2A38', color: 'aliceblue', textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd'}}>
    <thead>
      <tr>
        <th>Cliente</th>
        <th>Valor</th>
        <th>Emissão</th>
        <th>Vencimento</th>
        <th>Situação</th>
      </tr>
    </thead>
    <tbody>
      {datas.datas.map((invoice) => (
        <InvoiceRow key={invoice.id} props={invoice} />
      ))}
    </tbody>

  </table></>
}