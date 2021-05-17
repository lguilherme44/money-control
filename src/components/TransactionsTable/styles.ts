import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.div`
   margin-top: 4rem;
   overflow-x: auto;

   table {
      width: 100%;
      border-spacing: 0, 0.5rem;
      background: ${(props) => props.theme.colors.primary};
      border-radius: 0.25rem;
/*
   thead {
      tr {
         &.header-table{
            border-bottom:  1px solid ${(props) => props.theme.colors.textLight};
         }
      }
   } */


      th {
         color: ${(props) => props.theme.colors.text};
         font-weight: 400;
         padding: 1rem 2rem;
         text-align: left;
         line-height: 1.5rem;
      }

      td {
         padding: 1rem 2rem;
         border: 0;
         color: ${(props) => props.theme.colors.textDefault};

         &:first-child {
            color: var(--text-title);
         }

         &.deposit {
            color: ${(props) => props.theme.colors.secondary};
         }

         &.withdraw {
            color: var(--red);
         }
      }
   }
`;
