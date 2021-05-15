import Modal from 'react-modal';
import closeImng from '../../assets/close.svg';
import { Container } from './styles';

interface ModalCustomProps {
   isOpen: boolean;
   onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function ModalCustom({ isOpen, onRequestClose }: ModalCustomProps) {
   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
      >
         <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
         >
            <img src={closeImng} alt="Fechar modal" />
         </button>

         <Container>
            <h2>Cadastrar transação</h2>

            <input placeholder="Titulo" />

            <input type="number" placeholder="Valor" />

            <input placeholder="Categoria" />

            <button type="submit">Cadastrar</button>
         </Container>
      </Modal>
   );
}
