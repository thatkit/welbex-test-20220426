import React, { useState } from 'react';
import styles from './styles.module.scss';
import closeIcon from '../../../../assets/cross-icon.svg';

export const ImageDeleteWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const styleMapper = {
    true: { display: 'block' },
    false: { display: 'none' },
  };

  const [isShown, setIsShown] = useState(false);

  return (
    <div className={styles.wrapper} onClick={() => setIsShown(true)}>
      {children}
      <img
        className={styles.closeIcon}
        style={styleMapper[`${isShown}`]}
        alt="X"
        src={closeIcon}
        onClick={() => console.log('delete')}
      />
    </div>
  );
};
