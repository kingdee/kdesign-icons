import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Hot = ({
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
          id="1468-hot"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 11.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M22.5,0 C23.3284271,0 24,0.671572872 24,1.5 L24,9 C24,9.82842713 23.3284271,10.5 22.5,10.5 L1.5,10.5 C0.671572872,10.5 0,9.82842713 0,9 L0,1.5 C0,0.671572872 0.671572872,0 1.5,0 L22.5,0 Z M12.8184815,2.48217773 C11.9713135,2.48217773 11.2999267,2.7531738 10.8043213,3.29516602 C10.3087158,3.83715818 10.0609131,4.56591794 10.0609131,5.48144534 C10.0609131,6.33105466 10.303833,7.02075194 10.7896729,7.55053711 C11.2755127,8.08032226 11.9212646,8.34521482 12.7269287,8.34521482 C13.552124,8.34521482 14.2113037,8.07543946 14.7044677,7.53588871 C15.1976318,6.99633787 15.4442139,6.2663574 15.4442139,5.34594727 C15.4442139,4.49633789 15.2037353,3.8066406 14.7227783,3.27685546 C14.2418213,2.74707031 13.6070557,2.48217773 12.8184815,2.48217773 Z M5.35876464,2.57739254 L4.62634277,2.57739254 L4.62634277,8.25 L5.35876464,8.25 L5.35876464,5.69384767 L8.22985838,5.69384767 L8.22985838,8.25 L8.96228026,8.25 L8.96228026,2.57739254 L8.22985838,2.57739254 L8.22985838,5.04199214 L5.35876464,5.04199214 L5.35876464,2.57739254 Z M19.9669189,2.57739254 L15.9642334,2.57739254 L15.9642334,3.22924807 L17.5938721,3.22924807 L17.5938721,8.25 L18.3299561,8.25 L18.3299561,3.22924807 L19.9669189,3.22924807 L19.9669189,2.57739254 Z M12.7745361,3.14135746 C13.3629151,3.14135746 13.8261719,3.340332 14.1643067,3.73828126 C14.5024414,4.13623051 14.6715088,4.70141602 14.6715088,5.43383789 C14.6715088,6.14672851 14.4987793,6.70153807 14.1533203,7.09826662 C13.8078613,7.49499511 13.3323974,7.69335938 12.7269287,7.69335938 C12.1629639,7.69335938 11.7058105,7.4864502 11.3554687,7.07263186 C11.0051269,6.65881351 10.8299561,6.10888673 10.8299561,5.4228516 C10.8299561,4.7416992 11.0093994,4.19116207 11.3682861,3.77124022 C11.7271729,3.35131838 12.1959229,3.14135746 12.7745361,3.14135746 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Hot.displayName = 'Hot';
export default Hot;
