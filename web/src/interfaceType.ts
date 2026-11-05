export type InvoiceStatus = "Paid" | "Pending";

export interface InvoiceTableProps {
  datas: Invoice[];
}
export interface Customer {
  id: number;
  name: string;
  email: string;
}

export interface Invoice {
  id: number;
  ammount: number;
  status: InvoiceStatus;
  issuedDate: string;
  dueDate: string;
  customer: Customer;
}
