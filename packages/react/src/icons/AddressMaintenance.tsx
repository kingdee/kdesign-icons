import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AddressMaintenance = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="1316-地址维护"
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
              d="M20.5712,10.2256939 C21.1427298,10.2256939 21.4284946,10.5097409 21.4284946,11.077835 L21.4282572,21.9976309 C21.4325031,22.2650474 21.3259002,22.5228633 21.1324977,22.7129163 C20.9390952,22.9029693 20.6751858,23.0092487 20.4003067,23.0078432 L3.60373275,23.0078432 C3.32826372,23.0099585 3.06351427,22.9040399 2.86930162,22.7139536 C2.67508899,22.5238672 2.56780167,22.2656535 2.57157849,21.9976529 L2.57157849,11.2295033 C2.57157849,10.560297 2.85720597,10.2256939 3.42865387,10.2256939 C4.00007207,10.2256939 4.28578118,10.5097409 4.28578118,11.077835 L4.28578118,21.3035289 L19.7140727,21.3035289 L19.7140727,11.077835 C19.7140727,10.5097409 19.9997818,10.2256939 20.5712,10.2256939 Z M11.9820247,0 C12.254255,0.00252569184 12.5135084,0.114647889 12.699223,0.310174717 L23.6973827,8.51645541 C23.8927492,8.70505939 24.0018528,8.96344895 23.9999762,9.23250537 C23.9999762,9.49049289 23.8949489,9.73781253 23.7078131,9.91884011 C23.5180468,10.1127799 23.416427,10.2233996 23.142582,10.2256939 C22.8687545,10.2238369 22.6076696,10.1117173 22.4203232,9.91551916 L11.999927,2.13035289 L1.71439926,9.79962327 C1.53017051,9.99054082 1.27439716,10.0990491 1.00659274,10.0999002 C0.732597474,10.0973844 0.48298102,10.1111884 0.294842097,9.91551916 C0.105983461,9.73680479 -0.000421255306,9.49011222 4.64608761e-05,9.23252699 C-0.00255323949,8.96657725 0.104041115,8.71077282 0.295880688,8.52307569 L11.2765386,0.3002769 C11.4600271,0.109671794 11.7149615,0.0011637385 11.9820247,0 Z M7.28572676,17.8949642 C7.75910506,17.8949642 8.14285407,18.2764809 8.14285407,18.7471054 C8.14285407,19.2177299 7.75910506,19.5992465 7.28572676,19.5992465 C6.81234843,19.5992465 6.42859945,19.2177299 6.42859945,18.7471054 C6.42859945,18.2764809 6.81234843,17.8949642 7.28572676,17.8949642 Z M16.7141271,17.8949642 C17.1875054,17.8949642 17.5712545,18.2764809 17.5712545,18.7471054 C17.5712545,19.2177299 17.1875054,19.5992465 16.7141271,19.5992465 L10.714236,19.5992465 C10.2408577,19.5992465 9.85710868,19.2177299 9.85710868,18.7471054 C9.85710868,18.2764809 10.2408577,17.8949642 10.714236,17.8949642 L16.7141271,17.8949642 Z M7.28572676,13.6342585 C7.75910506,13.6342585 8.14285407,14.0157751 8.14285407,14.4863996 C8.14285407,14.9570241 7.75910506,15.3385408 7.28572676,15.3385408 C6.81234843,15.3385408 6.42859945,14.9570241 6.42859945,14.4863996 C6.42859945,14.0157751 6.81234843,13.6342585 7.28572676,13.6342585 Z M16.7141271,13.6342585 C17.1875054,13.6342585 17.5712545,14.0157751 17.5712545,14.4863996 C17.5712545,14.9570241 17.1875054,15.3385408 16.7141271,15.3385408 L10.714236,15.3385408 C10.2408577,15.3385408 9.85710868,14.9570241 9.85710868,14.4863996 C9.85710868,14.0157751 10.2408577,13.6342585 10.714236,13.6342585 L16.7141271,13.6342585 Z M7.28572676,9.3735527 C7.75910506,9.3735527 8.14285407,9.75506933 8.14285407,10.2256939 C8.14285407,10.6963184 7.75910506,11.077835 7.28572676,11.077835 C6.81234843,11.077835 6.42859945,10.6963184 6.42859945,10.2256939 C6.42859945,9.75506933 6.81234843,9.3735527 7.28572676,9.3735527 Z M16.7141271,9.3735527 C17.1875054,9.3735527 17.5712545,9.75506933 17.5712545,10.2256939 C17.5712545,10.6963184 17.1875054,11.077835 16.7141271,11.077835 L10.714236,11.077835 C10.2408577,11.077835 9.85710868,10.6963184 9.85710868,10.2256939 C9.85710868,9.75506933 10.2408577,9.3735527 10.714236,9.3735527 L16.7141271,9.3735527 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AddressMaintenance.displayName = 'AddressMaintenance';
export default AddressMaintenance;
