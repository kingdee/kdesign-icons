import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PreSalesHotline = ({
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
          id="1319-售前热线"
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
              d="M17.1643565,10.5776462 C17.1643565,11.0841711 17.5015847,11.4214296 18.0081096,11.4214296 C18.5146344,11.4214296 18.8519233,11.0841711 18.8519233,10.5776462 C18.8438745,7.78416399 16.5813096,5.52159909 13.7878274,5.51355037 C13.2813026,5.51355037 12.9440441,5.85080886 12.9440441,6.35733372 C12.9440441,6.8638586 13.2826375,7.20114744 13.7878274,7.20114744 C15.6504975,7.20626453 17.1592227,8.71497624 17.1643565,10.5776462 L17.1643565,10.5776462 Z M20.5408552,10.5776462 C20.5408552,11.0841711 20.8780835,11.4214296 21.3846083,11.4214296 C21.8911331,11.4214296 22.228422,11.0841711 22.228422,10.5776462 C22.228422,5.9361247 18.429349,2.13705161 13.7878578,2.13705161 C13.2813026,2.13705161 12.9440441,2.47564504 12.9440441,2.98216992 C12.9440441,3.4886948 13.2826375,3.8259533 13.7878274,3.8259533 C17.5015847,3.8259533 20.5408552,6.86522391 20.5408552,10.5776462 L20.5408552,10.5776462 Z M9.14630594,7.62369143 C10.0754052,6.69592717 10.159386,5.26027275 9.31560265,4.24719267 L6.69890639,0.956009741 C5.85512302,-0.141081573 4.25150682,-0.310378285 3.1531109,0.533435413 C3.06913002,0.618751248 2.98514914,0.618751248 2.98514914,0.702732151 L0.705711347,2.98216992 C-1.48841061,5.17629188 1.63481056,11.0841711 7.29074709,16.738803 C12.9440744,22.3934046 18.7666075,25.4326145 20.9607294,23.3224735 L23.2401672,21.0430356 C24.2532776,20.0299557 24.2532776,18.4263395 23.2401672,17.4985752 L23.0722054,17.3292784 L19.7797178,14.7125821 C18.7679424,13.8688291 17.3336229,13.9527797 16.4045237,14.8818789 L14.9702042,16.3175333 C13.450569,15.3884341 12.1002607,14.375354 10.9178839,13.1943121 C9.73684205,12.0119353 8.72506657,10.6615968 7.79596736,9.14196144 L9.14630594,7.62366108 L9.14630594,7.62369143 Z M7.96526407,5.34425363 C8.21854169,5.68284711 8.21854169,6.18937197 7.87994824,6.44264956 L6.02308477,8.38349392 C5.76023372,8.65258616 5.69317259,9.05708503 5.85512302,9.39660434 C6.85007372,11.2242991 8.10058094,12.9007684 9.56888027,14.3753843 C11.0435197,15.8436564 12.719985,17.0941605 14.5476603,18.0891415 C14.8874353,18.2507207 15.2919352,18.1831223 15.56071,17.9198448 L17.5015847,15.9790005 C17.8401782,15.641742 18.2613872,15.641742 18.5999807,15.8949893 L21.8911635,18.5956665 C21.8911635,18.5956665 21.9751444,18.5956665 21.9751444,18.6796474 C22.1370959,18.8336511 22.2287781,19.047351 22.2287781,19.2708357 C22.2287781,19.4943206 22.1370959,19.7080203 21.9751444,19.8620242 L19.6957067,22.1414619 C18.5999807,23.2371879 13.3666184,20.4525603 8.38650347,15.5564262 C3.40772347,10.6616271 0.707046304,5.34558859 1.80410727,4.24722301 L4.16619098,1.88377399 C4.50478443,1.63049638 5.0952902,1.63049638 5.34856779,2.05307073 L7.96526407,5.34558859 L7.96526407,5.34425363 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PreSalesHotline.displayName = 'PreSalesHotline';
export default PreSalesHotline;
