import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      {open && <h1>i am a modal.</h1>}
    </div>
  );
};

export default Modal;
