import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Xml = ({
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
          id="286.xml"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="xml"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.1428571,0 C23.616244,0 24,0.376080822 24,0.84 L24,20.16 C24,20.6239192 23.616244,21 23.1428571,21 L0.857142857,21 C0.383755941,21 0,20.6239192 0,20.16 L0,0.84 C0,0.376080822 0.383755941,0 0.857142857,0 L23.1428571,0 Z M14.491861,3.57876801 C14.0470228,3.4200983 13.555158,3.64487147 13.3932501,4.0808129 L13.3932501,4.0808129 L8.99584825,15.9209399 C8.83394041,16.3568813 9.06330078,16.838909 9.50813897,16.9975787 C9.95297716,17.1562484 10.444842,16.9314752 10.6067499,16.4955338 L10.6067499,16.4955338 L15.0041518,4.65540674 C15.1660596,4.21946529 14.9366992,3.73743772 14.491861,3.57876801 Z M8.38360183,6.19525619 C8.0878794,5.83299613 7.54848592,5.77426214 7.17883285,6.06407021 L7.17883285,6.06407021 L2.89311854,9.42407021 L2.81305347,9.49518579 C2.46610489,9.84423837 2.49279324,10.4220748 2.89311854,10.7359298 L2.89311854,10.7359298 L7.17883285,14.0959298 L7.2669623,14.156642 C7.63002772,14.3749058 8.11062728,14.2991377 8.38360183,13.9647438 L8.38360183,13.9647438 L8.44555304,13.8783769 C8.66827123,13.5225728 8.59095686,13.0515853 8.24973858,12.7840702 L8.24973858,12.7840702 L4.8,10.08 L8.24973858,7.37592979 L8.32952426,7.3049964 C8.62650764,7.00578211 8.65657646,6.52965003 8.38360183,6.19525619 Z M16.7330692,6.00335805 C16.3700039,5.78509419 15.8894043,5.86086227 15.6164297,6.19525619 C15.3434552,6.52965003 15.3735239,7.00578211 15.6705073,7.3049964 L15.6705073,7.3049964 L15.750293,7.37592979 L19.2000315,10.08 L15.750293,12.7840702 L15.6705073,12.8550036 C15.3982725,13.1292833 15.3503202,13.5522232 15.5544786,13.8783769 L15.5544786,13.8783769 L15.6164297,13.9647438 L15.6888107,14.0429338 C15.968688,14.3097238 16.4002593,14.3567171 16.7330692,14.156642 L16.7330692,14.156642 L16.8211988,14.0959298 L21.1069131,10.7359298 L21.1869781,10.6648142 C21.5091447,10.340694 21.5091447,9.81930601 21.1869781,9.49518579 L21.1869781,9.49518579 L21.1069131,9.42407021 L16.8211988,6.06407021 L16.7330692,6.00335805 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Xml.displayName = 'Xml';
export default Xml;
