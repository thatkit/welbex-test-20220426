import React, { useState } from 'react';
import styles from './styles.module.scss';
import closeIcon from '../../../../assets/cross-icon.svg';
import { observer } from 'mobx-react-lite';
import { useGlobalState } from '../../globalState';

export const ImageDeleteWrapper = observer(
  ({ children }: { children: JSX.Element }): JSX.Element => {
    const styleMapper = {
      true: { display: 'block' },
      false: { display: 'none' },
    };

    const [state] = useState(useGlobalState());
    const [isImgShown, setIsImgShown] = useState(true);
    const [isWrapperShown, setIsWrapperShown] = useState(false);

    const makeImgAndWrapperDissapear = () => {
      setIsImgShown(false);
      setIsWrapperShown(false);
    };

    return (
      <div
        className={styles.wrapper}
        style={styleMapper[`${isImgShown}`]}
        onClick={() => setIsWrapperShown(true)}
        onMouseLeave={() => setIsWrapperShown(false)}
      >
        {children}
        <img
          className={styles.closeIcon}
          style={styleMapper[`${isWrapperShown}`]}
          alt="X"
          src={closeIcon}
          onClick={() => {
            state.setDeleteFilesSeveral(children.props.filename);
            makeImgAndWrapperDissapear();
          }}
        />
      </div>
    );
  },
);
