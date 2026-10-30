import {Invoice} from "./interfaceType";
import {InvoiceRow} from "./InvoiceRow";
import {InvoiceStatus} from "./interfaceType";

export function formatCurrency(value: number): string {
 const formatter = new Intl.NumberFormat('pt-BR', { 
  style: 'currency',
  currency: 'BRL'});
 return formatter.format(value / 100);

};

export function formatDate(date: string): string {
const formatter = new Intl.DateTimeFormat('pt-BR', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
});
return formatter.format(new Date(`${date}T00:00:00`));
}

export function formatStatus(status: InvoiceStatus): string {
  return status === 'Paid' ? 'Pago' : 'Pendente';
}