import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/bloodDiet/operations';
import { bloodSelectors } from 'redux/bloodDiet/bloodDietSelectors';
import DailyCalorieIntake from '../DailyCalorieIntake';
import {
  Backdrop,
  ModalWindow,
  ModalButton,
  ModalButtonIcon,
  NotFound,
} from './Modal.styled';
import { clearState } from '../../redux/bloodDiet/operations';
import sprite from 'images/icons.svg';

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  const dispatch = useDispatch();
  const error = useSelector(bloodSelectors.selectBloodError);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleModal(false));
        dispatch(clearState());
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(toggleModal(false));
      dispatch(clearState());
    }
  };

  const onBtnClick = () => {
    dispatch(toggleModal(false));
    dispatch(clearState());
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ModalWindow>
        {!error ? <DailyCalorieIntake /> : <NotFound>404 NotFound</NotFound>}
        <ModalButton onClick={() => onBtnClick()}>
          <ModalButtonIcon>
            <use href={sprite + '#icon-exit-icon'} />
          </ModalButtonIcon>
        </ModalButton>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
}
