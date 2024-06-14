import './index.css';

interface Props {
	title: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({ title, onClick, disabled }:Props) {
    return (
      <button className='button-primary' disabled onClick={onClick}>{title}</button>
    );
}

 