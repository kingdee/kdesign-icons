import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BusinessCollaborationService = ({
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
          id="686.业务协同服务"
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
              d="M18.4041451,16.9119171 C18.932646,16.9119171 19.3678737,17.0987654 19.7409366,17.4714967 C20.0828986,17.8134735 20.2694301,18.2797947 20.2694301,18.7772021 L20.2694301,18.7772021 L20.2694301,19.057316 L22.0725428,19.8031176 C22.1036216,19.7720315 22.134715,19.7412548 22.134715,19.7098519 C22.3523326,19.5233205 22.6321224,19.3989637 22.9119196,19.3989637 C23.2227954,19.3989637 23.4715066,19.5233205 23.6891167,19.7098519 C23.9067343,19.9274695 24,20.2075761 24,20.4870565 C24,20.7979324 23.9067343,21.0466434 23.6891167,21.2642487 C23.4715066,21.4818711 23.2227954,21.5751369 22.9119196,21.5751369 C22.6321297,21.5751369 22.3834187,21.4821806 22.1968947,21.2956566 L22.1968947,21.2956566 L19.9274606,22.6632099 C19.9585467,22.7564757 19.9585467,22.8808275 19.9585467,22.9740933 C19.9585467,23.3782423 19.8341949,23.6891182 19.5544051,23.9689154 C19.2746154,24.2490147 18.9637247,24.373057 18.559583,24.373057 C18.1865275,24.373057 17.8445581,24.2487052 17.5647683,23.9689154 C17.3160647,23.6891182 17.1606218,23.3782349 17.1606218,22.9740933 C17.1606218,22.6010378 17.3160647,22.2590684 17.5647683,21.9792786 C17.7202136,21.8238332 17.9067377,21.7305675 18.0932618,21.6683953 L18.0932618,21.6683953 L18.0932618,20.642487 C17.7202063,20.5803149 17.3782368,20.3937834 17.0984471,20.1139936 C16.7253916,19.7412475 16.5388601,19.305703 16.5388601,18.7772021 C16.5388601,18.2801041 16.7253989,17.8137755 17.0984398,17.4715041 C17.4404165,17.098758 17.9067377,16.9119171 18.4041451,16.9119171 Z M21.3077781,0 C21.8037273,0 22.2057736,0.400839693 22.2057736,0.877112133 L22.2062465,15.7507563 C21.3536914,15.2253716 20.3495468,14.9222798 19.2746114,14.9222798 C16.184106,14.9222798 13.6787565,17.4276293 13.6787565,20.5181347 C13.6787565,21.4475312 13.9053312,22.3240084 14.3062579,23.0953435 L0.897995366,23.0940045 C0.402046234,23.0940045 0,22.6931648 0,22.2168923 L0,0.877112133 C0,0.392696481 0.38542279,0 0.897995366,0 L21.3077781,0 Z M20.0518125,19.6787585 C19.9896403,19.8341964 19.8652885,19.9585482 19.7409366,20.1139936 C19.4300533,20.3937834 19.11917,20.5803149 18.7150284,20.642487 L18.7150284,20.642487 L18.7150284,21.6062156 C19.0569978,21.6369923 19.3057015,21.761661 19.5544051,21.9789617 C19.5544051,22.0103647 19.5854912,22.0411413 19.6165773,22.0725369 L19.6165773,22.0725369 L21.8860114,20.7976156 C21.8549253,20.7043498 21.8238367,20.6110914 21.8238367,20.4867396 C21.8238367,20.4559556 21.8238367,20.4245601 21.8549253,20.3626973 L21.8549253,20.3626973 L20.0518125,19.6787585 Z M10.6587713,10.6587713 L4.44115471,10.6587713 L4.44115471,12.4352332 L10.6587713,12.4352332 L10.6587713,10.6587713 Z M17.7646188,5.32938563 L4.44115471,5.32938563 L4.44115471,7.10584753 L17.7646188,7.10584753 L17.7646188,5.32938563 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BusinessCollaborationService.displayName = 'BusinessCollaborationService';
export default BusinessCollaborationService;