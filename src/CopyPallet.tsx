import { ClipboardProps } from './types/commonTypes';

export default function CopyPallet({ color, handleClick }: ClipboardProps) {
  return (
    <div onClick={() => handleClick()} className='selected-color'>
      <p> tap to copy ;)</p>
      <i>{color}</i>
    </div>
  );
}
