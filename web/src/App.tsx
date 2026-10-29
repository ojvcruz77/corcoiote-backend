import InvoiceTable from './InvoiceTable';
import { Invoice } from './interfaceType';

const container = document.querySelector('div');
const invoices: Invoice[] = [{
  id: 1,
  ammount: 1000,
  status: 'Pending',
  issuedDate: '2026-09-10',
  dueDate: '2026-10-15',
  customer: {
    name: 'Contrutora Meridiano',
    email: 'comercial@meridiano.com.br'
  }
}, {
  id: 2,
  ammount: 89600,
  status: 'Paid',
  issuedDate: '2026-10-01',
  dueDate: '2026-10-31',
  customer: {
    name: 'Gráfica Nova Vida',
    email: 'grafica@novavida.com.br'
  }
}, {
  id: 3,
  ammount: 125037,
  status: 'Pending',
  issuedDate: '2026-10-12',
  dueDate: '2026-11-17',
  customer: {
    name: 'Tendi Tudo',
    email: 'contato@tenditudo.com.br'
  }
}];

export default function App() {

  return <>
    <InvoiceTable datas={invoices}/>

  </>
}