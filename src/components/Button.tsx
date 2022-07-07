import React, {FC} from 'react'

interface ButtonProps {
  getInitialData : () => void;
  children: string
}

export const Button: FC<ButtonProps> = ({getInitialData, children}) => {
  return (
    <button className='button' onClick={getInitialData}>{children}</button>
  )
}
