import { useEffect, useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

interface TransactionsTableProps {
   id: number;
   title: string;
   amount: number;
   type: string;
   category: string;
}

export function TransactionsTable() {
   const [transactionsFromApi, setTransactionsFromApi] = useState([]);

   async function loadTransactionsFromApi() {
      const { data } = await api.get('transactions');

      if (data) {
         setTransactionsFromApi(data);
      }
   }

   useEffect(() => {
      loadTransactionsFromApi();
   }, []);

   return (
      <Container>
         <table>
            <thead>
               <tr className="header-table">
                  <th>Titulo</th>
                  <th>Valor</th>
                  <th>Categoria</th>
                  <th>Data</th>
                  <th>Opções</th>
               </tr>
            </thead>
            <tbody>
               {transactionsFromApi.map(
                  (transactions: TransactionsTableProps, index) => (
                     <>
                        <tr>
                           <td className={transactions.type}>
                              {transactions.title}
                           </td>
                           <td>{transactions.amount}</td>
                           <td>{transactions.category}</td>
                           <td>10/05/2021</td>
                           <td>
                              <button>Editar</button>
                              <button>Deletar</button>
                           </td>
                        </tr>
                     </>
                  )
               )}
            </tbody>
         </table>
      </Container>
   );
}
