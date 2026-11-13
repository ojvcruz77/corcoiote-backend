type InvoiceStatus = "Paid" | "Pending";

interface Customer {
  id: number;
  name: string;
  email: string;
}
interface Invoice {
  id: number;
  ammount: number;
  status: InvoiceStatus;
  issuedDate: string;
  dueDate: string;
  customer: Customer;
}
const invoices: Invoice[] = [
  {
    id: 1,
    ammount: 48547,
    status: "Pending",
    issuedDate: "2026-09-10",
    dueDate: "2026-10-15",
    customer: {
      id: 1,
      name: "Meridiano Transportes",
      email: "comercial@meridiano.com.br"
    }
  },
  {
    id: 2,
    ammount: 89600,
    status: "Paid",
    issuedDate: "2026-10-01",
    dueDate: "2026-10-31",
    customer: {
      id: 2,
      name: "Gráfica Nova Vida",
      email: "grafica@novavida.com.br"
    }
  },
  {
    id: 3,
    ammount: 125037,
    status: "Pending",
    issuedDate: "2026-10-12",
    dueDate: "2026-11-17",
    customer: {
      id: 3,
      name: "Tendi Tudo",
      email: "contato@tenditudo.com.br"
    }
  }
];
export function findManyInvoices(): Invoice[] {
  return invoices;
}