import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SocialService = ({
  size = '1em',
  color = 'currentColor',
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
          id="752.社交服务"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M9.0776,27.1096 C3.61667622,25.0568565 0,19.8339904 0,14 C0,6.2678 6.2678,0 14,0 C21.7322,0 28,6.2678 28,14 C28,20.0004 24.2256,25.1188 18.9224,27.111 C19.2064951,25.9827252 19.4382098,24.8419042 19.6168,23.6922 C23.9993221,21.1518135 26.1311602,15.9861217 24.8158535,11.0942885 C23.5005468,6.2024553 19.0655763,2.80243438 14,2.80243438 C8.93442366,2.80243438 4.49945317,6.2024553 3.18414648,11.0942885 C1.86883978,15.9861217 4.0006779,21.1518135 8.3832,23.6922 L8.4,23.8 C8.582,24.9788 8.8074,26.082 9.0776,27.1096 Z M8.1984,21.8988 C4.78634208,19.3927791 3.36920431,14.9790626 4.68465886,10.9551516 C6.00011341,6.93124069 9.75074418,4.20691656 13.9842104,4.20027771 C18.2176766,4.19366308 21.9768178,6.906232 23.3048633,10.926005 C24.6329088,14.945778 23.2295958,19.3639095 19.8254,21.8806 C19.9178,20.5926 19.8954,19.2934 19.7554,17.9844 C21.773682,15.0674733 21.2911278,11.1019574 18.6321975,8.75418963 C15.9732673,6.40642184 11.9785174,6.41859205 9.33394152,8.78251724 C6.68936567,11.1464424 6.23098245,15.1148249 8.267,18.0194 C8.14798688,19.3090443 8.12505696,20.6057543 8.1984,21.8988 L8.1984,21.8988 Z M15.7724,27.6906 C15.7724,27.6906 15.0626,28 14.0084,28 C12.9584,28 12.2304,27.6906 12.2304,27.6906 C12.2304,27.6906 9.4304,23.3884 9.8406,18.7502 C9.8406,18.7502 10.5014,16.8 14.0336,16.8 C17.5644,16.8 18.158,18.7502 18.158,18.7502 C18.5696,23.3884 15.7724,27.6906 15.7724,27.6906 L15.7724,27.6906 Z M14,15.4 C12.9996563,15.4 12.0753007,14.866323 11.5751288,14 C11.074957,13.133677 11.074957,12.066323 11.5751288,11.2 C12.0753007,10.333677 12.9996563,9.8 14,9.8 C15.5463973,9.8 16.8,11.0536027 16.8,12.6 C16.8,14.1463973 15.5463973,15.4 14,15.4 L14,15.4 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SocialService.displayName = 'SocialService';
export default SocialService;