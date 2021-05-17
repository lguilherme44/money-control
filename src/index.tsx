import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
   routes() {
      this.namespace = 'api';

      this.get('/transactions', () => {
         return [
            {
               id: 1,
               title: 'Desenvolvimento de websites',
               amount: 1200,
               type: 'deposit',
               category: 'Freela',
               createAt: new Date(),
            },
            {
               id: 2,
               title: 'Alguel',
               amount: 480,
               type: 'withdraw',
               category: 'Home',
               createAt: new Date(),
            },
            {
               id: 3,
               title: 'Vale',
               amount: 1000,
               type: 'deposit',
               category: 'Salary',
               createAt: new Date(),
            },
         ];
      });
   },
});

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById('root')
);
