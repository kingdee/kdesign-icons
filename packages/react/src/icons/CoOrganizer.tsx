import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CoOrganizer = ({
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
          id="904.协办"
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
              d="M14,28 C6.2680135,28 0,21.7319865 0,14 C0,6.2680135 6.2680135,0 14,0 C21.7319865,0 28,6.2680135 28,14 C28,21.7319865 21.7319865,28 14,28 Z M21.0171111,12.4771111 L19.9671111,12.8271111 C19.9671111,11.62 19.9842222,10.2728889 19.9842222,8.78577777 L16.4686667,8.78577777 L16.4686667,5.91422223 L14.8555556,5.91422223 L14.8555556,8.78577777 L12.0244444,8.78577777 L12.0244444,10.3942222 L14.8555556,10.3942222 L14.8555556,10.5 C14.8042222,15.26 13.5255556,18.7071111 11.0413333,20.86 L12.2842222,21.9628889 C15.0142222,19.5471111 16.3955556,15.7328889 16.4655556,10.5 L16.4655556,10.3942222 L18.3384444,10.3942222 C18.3042222,15.2071111 18.2513333,18.0242222 18.1455556,18.8642222 C18.0242222,19.7742222 17.6026667,20.23 16.8684444,20.23 C16.4484444,20.23 15.9413333,20.1957778 15.3813333,20.16 L15.7842222,21.6828889 C16.4142222,21.7342222 16.8684445,21.77 17.1484444,21.77 C18.6884444,21.77 19.5455556,21.0528889 19.7213333,19.6357778 C19.8255556,18.6713333 19.9142222,16.6071111 19.9655556,13.44 C20.3684444,14.5242222 20.7542222,15.75 21.1384444,17.1142222 L22.3813333,16.5386667 C21.9784444,15.1028889 21.5242222,13.7386667 21.0155556,12.4786667 L21.0171111,12.4771111 Z M12.2142222,12.4242222 C11.83,14 11.1844444,15.3642222 10.29,16.5044444 L11.41,17.5544444 C12.32,16.4344444 13.0371111,14.8415556 13.5271111,12.7586667 L12.2142222,12.4257778 L12.2142222,12.4242222 Z M6.09,9.76422223 L6.09,11.3244444 L7.98,11.3244444 L7.98,21.9286667 L9.57288888,21.9286667 L9.57288888,11.3244444 L11.3928889,11.3244444 L11.3928889,9.76577777 L9.57288888,9.76577777 L9.57288888,5.88 L7.98,5.88 L7.98,9.76577777 L6.09,9.76577777 L6.09,9.76422223 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CoOrganizer.displayName = 'CoOrganizer';
export default CoOrganizer;
