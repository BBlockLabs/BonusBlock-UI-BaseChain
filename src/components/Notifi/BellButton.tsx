import { useUnreadState } from '@notifi-network/notifi-react-card';
import { FC } from 'react';

import style from './BellButton.module.css';

type BellButtonProps = {
  setIsCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BellButton: FC<BellButtonProps> = ({ setIsCardOpen }) => {
  const { hasUnreadNotification } = useUnreadState();

  return (
    <div
      onClick={() => setIsCardOpen((prev) => !prev)}
      className={style.bellButton}
    >
      <img width={22} height={22} src="/bell-icon.svg" alt="logo" className="text-black" />
      {hasUnreadNotification ? (
        <div className={style.numberBadge}>
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="9"
              height="9"
              rx="9"
              fill="#D74506"
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
};
