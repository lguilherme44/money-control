import { FormEvent, useEffect, useState } from 'react';
import { Container, ButtonCustom } from './styles';
import { api } from '../../services/api';
import { MdEdit, MdDelete } from 'react-icons/md';

interface TransactionsTableProps {
   id?: number;
   title: string;
   amount: number;
   type: string;
   category: string;
}

export function TransactionsTable() {
   const [transactionsFromApi, setTransactionsFromApi] = useState([]);
   const [field, setField] = useState<TransactionsTableProps>({
      title: '',
      amount: 0,
      type: '',
      category: '',
   });

   async function loadTransactionsFromApi() {
      const { data } = await api.get('transactions');

      if (data) {
         setTransactionsFromApi(data);
      }
   }

   function handleChangeInput(e: FormEvent) {
      // setField(...field);
      console.log(e);
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
                           <td
                              className={transactions.type}
                              onChange={(e) => setField(e.target.value)}
                           >
                              {transactions.title}
                           </td>
                           <td>{transactions.amount}</td>
                           <td>{transactions.category}</td>
                           <td>10/05/2021</td>
                           <td>
                              <ButtonCustom>
                                 <MdEdit color="#5429CC" />
                              </ButtonCustom>
                              <ButtonCustom>
                                 <MdDelete color="#e52e4d" />
                              </ButtonCustom>
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
