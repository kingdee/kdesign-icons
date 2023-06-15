import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProjectHandover = ({
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
          id="446.项目移交"
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
              d="M18.0254237,12.963068 C21.3250911,12.963068 24,15.6379769 24,18.9376443 C24,22.2373117 21.3250911,24.9122206 18.0254237,24.9122206 C14.7257564,24.9122206 12.0508475,22.2373117 12.0508475,18.9376443 C12.0508475,15.6379769 14.7257564,12.963068 18.0254237,12.963068 Z M20.3389831,7.79357649 C20.807021,7.79357649 21.1864407,8.17299615 21.1864407,8.64103412 L21.1867652,12.948169 C20.2430915,12.4490465 19.1672638,12.1664144 18.0254237,12.1664144 C14.2858008,12.1664144 11.2542373,15.1979778 11.2542373,18.9376009 C11.2542373,20.4837911 11.7724844,21.9089382 12.6447501,23.0488138 L0.338983055,23.0478138 C0.151767885,23.0478138 4.01978935e-09,22.8960459 4.01978935e-09,22.7088307 L4.01978935e-09,21.6918816 C4.01978935e-09,21.5046664 0.151767885,21.3528985 0.338983055,21.3528985 L1.69491526,21.3528985 L1.69491526,8.64103412 C1.69491526,8.17299615 2.07433498,7.79357649 2.54237288,7.79357649 L20.3389831,7.79357649 Z M21.7079531,19.6579833 L13.559322,19.6579833 L13.559322,20.3011499 L16.166884,22.2003562 L16.166884,20.3011499 L21.7079531,20.3011499 L21.7736424,20.2946165 C21.9221701,20.2646301 22.0338983,20.1349714 22.0338983,19.9795666 C22.0338983,19.801961 21.8879677,19.6579833 21.7079531,19.6579833 L21.7079531,19.6579833 Z M7.36487805,18.4531881 C7.07208661,18.6460189 6.78028226,18.7613482 6.41472481,18.7613482 C6.0498419,18.7613482 5.63886029,18.608215 5.34703949,18.4531881 C4.71778085,18.8366798 4.35416777,19.4147959 4.25620029,20.1875363 L4.238308,20.3693159 L4.23798808,20.3783223 C4.23798808,20.4344029 4.274358,20.481989 4.32479763,20.4988774 L4.36491698,20.5054409 L8.35730752,20.5049891 C8.42734455,20.4990718 8.47932384,20.4374986 8.47326065,20.3674739 C8.39674486,19.4618364 8.02728401,18.8237411 7.36487805,18.4531881 Z M6.38868831,15.4206951 C5.57498574,15.4206951 4.91304215,16.053391 4.90286675,16.8404852 C4.89612975,17.3587987 5.17761065,17.8402711 5.6403567,18.1015801 C6.1024611,18.3625709 6.67425746,18.3625709 7.13700351,18.1015801 C7.59910791,17.840279 7.88090139,17.3588066 7.87367907,16.8404852 C7.86381627,16.053399 7.20187266,15.4206951 6.38868831,15.4206951 Z M19.3986271,15.4206951 L19.3986271,17.3193841 L13.8837279,17.3193841 C13.7045635,17.3193841 13.559322,17.4634777 13.559322,17.6412261 C13.559322,17.8189745 13.7045635,17.963068 13.8837279,17.963068 L13.8837279,17.963068 L22.0338983,17.963068 L21.9997117,17.4591686 L19.3986271,15.4206951 Z M10.1742502,12.5605256 L4.84840048,12.5605256 C4.64038362,12.5605256 4.46737644,12.7104199 4.43149851,12.9080887 L4.42467167,12.9842545 L4.42467167,13.0361063 C4.42467167,13.2441232 4.57456588,13.4171303 4.77223469,13.4530084 L4.84840048,13.4598351 L10.1742502,13.4598351 C10.382267,13.4598351 10.5552743,13.3099409 10.5911522,13.1122721 L10.597979,13.0361063 L10.597979,12.9842545 C10.597979,12.7502355 10.4082692,12.5605256 10.1742502,12.5605256 Z M18.1270147,9.87585166 L4.84840048,9.87585166 C4.64038362,9.87585166 4.46737644,10.0257458 4.43149851,10.2234147 L4.42467167,10.2995805 L4.42467167,10.397338 C4.42467167,10.6053548 4.57456588,10.7783621 4.77223469,10.81424 L4.84840048,10.8210668 L18.1270147,10.8210668 C18.3350315,10.8210668 18.5080388,10.6711726 18.5439167,10.4735038 L18.5507435,10.397338 L18.5507435,10.2995805 C18.5507435,10.0655615 18.3610336,9.87585166 18.1270147,9.87585166 Z M11.8215808,0.0945783592 C18.5788019,3.58643822 22.1304125,5.45859022 22.4764126,5.71103438 C23.0053253,6.09690599 23.0305245,6.67684118 22.4667207,6.94611887 L0.436743366,6.94611887 C-0.162883979,6.67684118 -0.128017369,6.09693282 0.436743366,5.71103438 C0.798802857,5.46321008 4.2127632,3.65441842 10.6786243,0.284659404 L11.0409975,0.0958807603 C11.28549,-0.0314987029 11.5766646,-0.0319845221 11.8215808,0.0945783592 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProjectHandover.displayName = 'ProjectHandover';
export default ProjectHandover;
