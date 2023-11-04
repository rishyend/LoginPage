import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { FrameIcon } from './FrameIcon';
import { FrameIcon2 } from './FrameIcon2';
import classes from './Group10.module.css';
import { Rectangle7Icon } from './Rectangle7Icon';

interface Props {
  className?: string;
}
/* @figmaId 607:16 */
export const Group10: FC<Props> = memo(function Group10(props = {}) {
  return (
    <>
      <div className={classes.logIn}>Log-in</div>
      <div className={classes.rectangle7}>
        <Rectangle7Icon className={classes.icon} />
      </div>
      <div className={classes.password}>Password</div>
      <div className={classes.frame}>
        <FrameIcon className={classes.icon2} />
      </div>
      <div className={classes.rectangle6}></div>
      <div className={classes.username}>Username</div>
      <div className={classes.frame2}>
        <FrameIcon2 className={classes.icon3} />
      </div>
      <div className={classes.rectangle8}></div>
      <div className={classes.sIGNIN}>SIGN IN</div>
      <div className={classes.rectangle72}></div>
      <div className={classes.loginWithNITMail}>
        <div className={classes.textBlock}>Login with NIT Mail</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.google1}></div>
    </>
  );
});
