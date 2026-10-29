type InvoiceStatus = 'Paid' | 'Pending';

export interface InvoiceTableProps {
  datas: Invoice[];
}

export interface Invoice {
  id: number;
  ammount: number;
  status: InvoiceStatus;
  issuedDate: String;
  dueDate?: String;
  customer: {
    name: string;
    email: string;
  };
}
;