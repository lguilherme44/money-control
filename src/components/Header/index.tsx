import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container, Content } from './styles';
import { shade } from 'polished';
import ThemeCustomDefault from '../../styles/themes/context';
import Switch from 'react-switch';

interface HeaderProps {
   onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
   const { title } = useContext(ThemeContext);
   const { toggleTheme } = useContext(ThemeCustomDefault);

   return (
      <Container>
         <Content>
            <button type="button" onClick={onOpenNewTransactionModal}>
               Nova transação
            </button>
            <div>
               <Switch
                  onChange={toggleTheme}
                  checked={title === 'dark'}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={15}
                  width={40}
                  handleDiameter={20}
                  offColor={shade(0.5, '#212121')}
                  onColor={shade(0.5, '#fff')}
               />
            </div>
         </Content>
      </Container>
   );
}
