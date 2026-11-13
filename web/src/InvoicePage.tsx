import InvoiceTable from "./InvoiceTable";
import type { Invoice } from "./interfaceType";

interface InvoicePageProps {
  datas: Invoice[];
}

export default function InvoicePage({ datas }: InvoicePageProps) {
  return (
    <>
      <h1>Faturas</h1>
      <div className='panel '>
        <InvoiceTable datas={datas} />
      </div>
    </>
  );
}

