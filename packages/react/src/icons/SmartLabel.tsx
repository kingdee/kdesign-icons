import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SmartLabel = ({
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
          id="1291-智能标签"
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
              d="M12,0 C18.6278974,0 24,5.37210269 24,12 C24,18.6278974 18.6278974,24 12,24 C5.37210269,24 0,18.6278974 0,12 C0,5.37210269 5.37210269,0 12,0 Z M12,1.64140558 C6.27897926,1.64140558 1.64140558,6.27897926 1.64140558,12 C1.64140558,17.7210208 6.27897926,22.3585944 12,22.3585944 C17.7210208,22.3585944 22.3585944,17.7210208 22.3585944,12 C22.3585944,6.27897926 17.7210208,1.64140558 12,1.64140558 Z M16.932545,6 C17.4565798,6 17.8924184,6.35935162 17.9828018,6.83323658 L18,7.01583403 L18,15.7841659 C18,16.3451956 17.5220842,16.8 16.932545,16.8 C16.4085103,16.8 15.9726718,16.4406484 15.8822882,15.9667634 L15.8650901,15.7841659 L15.8650901,7.01583403 C15.8650901,6.45480439 16.343006,6 16.932545,6 Z M9.8924627,6.0006001 C10.478583,6.0006001 11.0118064,6.30099458 11.2973503,6.77458858 L11.4039944,6.98779063 L14.9274299,15.6910676 C15.0289396,15.9418973 14.9940516,16.2242191 14.8341643,16.4457953 C14.6743044,16.6673336 14.4099967,16.7996612 14.1276359,16.7996612 C13.5696432,16.7998376 13.0637036,16.5093414 12.7997664,16.0546606 L12.7020208,15.850114 L12.0471277,14.1355955 L7.72459642,14.1355955 L7.06712093,15.857184 C6.90421973,16.2815228 6.54537439,16.5994968 6.10921267,16.7319626 L5.88523795,16.7823701 L5.6516724,16.7996612 C5.3710686,16.7996612 5.10846374,16.6679956 4.94960093,16.4478022 C4.8225439,16.2716935 4.77490202,16.0569892 4.81250237,15.8504786 L4.85677658,15.697863 L8.38094386,6.98775907 C8.62184909,6.3929521 9.22261094,6.0006001 9.8924627,6.0006001 Z M9.89079084,8.52819802 L8.40723108,12.3649619 L11.3644931,12.3649619 L9.89079084,8.52819802 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SmartLabel.displayName = 'SmartLabel';
export default SmartLabel;
