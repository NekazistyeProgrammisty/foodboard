/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import './Modal.css';

interface IModalProps {
    active:boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    children?: React.ReactNode
}

const Modal: React.FC<IModalProps> = ({ active, setActive, children }) => (
	<div
		className={active ? 'modal active' : 'modal'}
		role="button"
		onClick={() => {
			setActive(false);
		}}
	>
		<div
			className={active ? 'modal__content active' : 'modal__content'}
			role="button"
			onClick={
				(e) => e.stopPropagation()
			}
		>
			{children}
		</div>
	</div>
);

export default Modal;
