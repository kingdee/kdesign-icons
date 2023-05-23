import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Label = ({
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
          id="239.标签管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="标签管理"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M17.4425616,13.3888363 L17.7228002,14.7564974 C18.0671611,14.8484608 18.3996474,14.985227 18.7083848,15.1620797 L19.8803993,14.3886437 L19.8827743,14.3910017 L20.9894789,15.4898468 L20.9930412,15.4922047 L20.2140731,16.6558957 C20.3933783,16.9624405 20.5311226,17.2937445 20.6225564,17.6380179 L20.6225564,17.6368389 L22,17.9162662 L22,19.4725702 L20.621369,19.7508185 C20.5298916,20.0948024 20.392514,20.4251015 20.2128857,20.7329406 L20.9918538,21.8966316 L20.9906663,21.8989897 L19.8839617,22.9978345 L19.8815867,23.0001926 L18.7095722,22.2267567 C18.4008349,22.4036094 18.0695359,22.5403756 17.7239876,22.6311599 L17.4437491,24 L15.8763133,24 L15.5960747,22.632339 C15.2509995,22.5408058 14.9196073,22.4044331 14.6104901,22.2267567 L13.4372882,23.0001926 L12.3258337,21.8966316 L13.1048018,20.7329406 C12.9262893,20.4246968 12.7893514,20.0944953 12.697506,19.7508185 L11.3188749,19.4725702 L11.3188749,17.9162662 L12.6963186,17.6380179 C12.7877523,17.2937445 12.9266841,16.9636195 13.1071767,16.6558957 L12.3282087,15.4922047 L13.4384756,14.3886437 L14.6116776,15.1609007 C14.920415,14.9828689 15.2517138,14.8461028 15.5972623,14.7553184 L15.8751258,13.3888363 L17.4425616,13.3888363 Z M9.44935324,0.135185693 L17.6758348,6.34813674 C17.8711226,6.47770579 17.9885525,6.69153217 17.9902532,6.92065729 L17.9890532,6.9218186 L17.9942076,11.6782116 C17.6727608,11.6350445 17.3448115,11.6127662 17.0117302,11.6127662 C12.9186551,11.6127662 9.60056209,14.9769625 9.60056209,19.126909 C9.60056209,20.6388198 10.0409708,22.0464385 10.7988133,23.2250813 L0.762044603,23.2255323 C0.350279294,23.2324378 0.00983373075,22.9164803 0,22.5180677 L0,6.9218186 C0,6.69304265 0.117606884,6.47936357 0.31441843,6.34581416 L8.55170067,0.135185693 C8.82193029,-0.0450618977 9.17912361,-0.0450618977 9.44935324,0.135185693 Z M16.6659685,16.9258876 C15.6822515,16.9245886 14.8837281,17.7153294 14.8824133,18.6920602 C14.8811049,19.6687908 15.6775018,20.4616432 16.6612187,20.4629487 C17.6449355,20.4642478 18.443459,19.6735069 18.4447739,18.6967762 C18.4460823,17.7200456 17.6496854,16.9271931 16.6659685,16.9258876 Z M9.00052694,4.64567203 C8.0063562,4.64567203 7.20042155,5.42556912 7.20042155,6.38762094 C7.20042155,7.34967274 8.0063562,8.12956983 9.00052694,8.12956983 C9.99469771,8.12956983 10.8006323,7.34967274 10.8006323,6.38762094 C10.8006323,5.42556912 9.99469771,4.64567203 9.00052694,4.64567203 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Label.displayName = 'Label';
export default Label;
