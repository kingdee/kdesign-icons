import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PersonnelAffairsChanges = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="700.人事事务变动"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12.0684369,1.13239237 C15.8009529,0.435666758 15.6516494,6.22104594 15.1415411,7.76380075 C15.1415411,7.76380075 15.4898917,7.76380075 15.4027858,9.21947397 C15.3032744,10.1401549 14.8553637,10.9862085 14.146184,11.5833984 C13.8973447,12.5289632 13.4494584,13.4123548 12.8398143,14.1712781 C12.7029649,14.3952334 12.653197,14.6689566 12.6905108,14.9302014 C11.9564714,16.0873162 11.5707584,17.4309995 11.5832125,18.8120209 C11.5832125,21.0764096 12.6283131,23.2163787 14.4199315,24.5974001 C13.0513398,24.6969359 11.5832125,24.8462394 10.0902012,24.8462394 L10.1150852,24.8213555 C5.37480656,24.8213555 3.29079197e-16,24.323677 3.29079197e-16,22.0593126 L3.29079197e-16,20.4543359 C3.29079197e-16,18.3392507 3.22240771,16.4356668 6.74339822,15.7140329 C7.32815833,15.4278799 7.65164938,14.8058061 7.57699758,14.1588239 C6.89270177,13.3376787 6.41990717,12.3672299 6.19595182,11.3221293 C5.94711254,11.2101638 5.73561135,11.0608602 5.53653992,10.8617888 C5.06376966,10.1526091 4.83981432,9.31900968 4.87715236,8.47298051 C4.97668807,7.61449718 5.17573514,7.91310432 5.22550302,7.77625487 C4.59097503,5.92243882 4.80250058,3.88200547 5.78537921,2.18992278 C7.5894274,-1.03246059 11.4712227,-0.0744172624 12.0684369,1.13239237 Z M15.4401238,15.5771835 L17.8538162,18.5880656 L15.8880346,18.3267966 C15.8382666,18.5756359 15.8258125,18.8369049 15.8258125,19.0857199 C15.8258125,21.1510614 17.592547,22.8804578 19.3965953,23.5522996 C16.9953327,24.1121757 13.6236459,22.5694209 13.4867964,19.5460604 C13.4867964,18.9737543 13.5365642,18.4014484 13.6361,17.829118 L12.1182048,17.5802787 L15.4401238,15.5771835 Z M22.5940947,18.3765644 C22.6438625,18.9488705 22.6065489,19.5212007 22.494559,20.0935067 L24,20.2925781 L22.4323613,21.2879352 L20.7776167,22.3454656 L18.2644131,19.4340948 L20.2301703,19.6331662 C20.2550523,19.3808037 20.2550523,19.1266055 20.2301703,18.874243 C20.2301703,16.8213555 18.3390405,15.0795293 16.5598762,14.4947691 C18.9611386,13.8975549 22.3950233,15.3532281 22.5940947,18.3765644 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PersonnelAffairsChanges.displayName = 'PersonnelAffairsChanges';
export default PersonnelAffairsChanges;
