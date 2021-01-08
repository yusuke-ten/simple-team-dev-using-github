import React, { ReactNode } from 'react';
import './custom-button.styles.scss';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  isGoogleSignIn: boolean;
  inverted: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: Props): ReactNode => (
  <button
    className={`${inverted ? 'inverted' : ''}${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
