import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ManufacturingSupplierOne = ({
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
          id="1827.制造供应商"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M6.85332625,21.9050854 C8.16620424,21.9302278 9.23797314,23.0412053 9.26286181,24.4051776 C9.28619497,25.8508625 8.15531545,27.0262672 6.76154925,26.9995535 C5.44867126,26.9759825 4.37845791,25.8634337 4.35356923,24.5010328 C4.32868053,23.0537764 5.46111557,21.8783717 6.85332625,21.9050854 Z M25.3860613,21.9050854 C26.6989393,21.9302278 27.7691527,23.0412053 27.7940413,24.4051776 C27.81893,25.8508625 26.686495,27.0262672 25.2927288,26.9995535 C23.9798508,26.9759825 22.9096374,25.8634337 22.8847488,24.5010328 C22.8598601,23.0537764 23.9922951,21.8783717 25.3860613,21.9050854 Z M12.1468379,8.84363627 C12.4895142,8.84966228 12.7631923,9.13384839 12.7597724,9.48005192 L12.7597724,23.622622 C12.7640546,23.9694355 12.4901278,24.2545821 12.1468379,24.2606091 L10.8992927,24.2606091 C10.5944063,24.2606091 10.3392973,24.026471 10.292631,23.7121916 C10.0390776,21.9475132 8.5722009,20.596112 6.80510445,20.596112 C5.038008,20.596112 3.57113129,21.950656 3.31602229,23.7106202 C3.27737566,24.0208666 3.01885326,24.2552385 2.70936065,24.2606091 L2.61291701,24.2606091 C2.27691979,24.2606091 2.00001647,23.9730435 2.00001647,23.622622 L2.00001647,15.4607877 C1.99802768,14.9766339 2.1762583,14.5094088 2.49936239,14.1518143 L6.2093316,10.0504689 C6.9062147,9.28048454 7.87842886,8.84363627 8.8941982,8.84363627 Z M28.7724777,5 C29.459172,5.00948414 30.0084495,5.57912843 29.9999016,6.27283131 L29.9999016,23.0820616 C29.9999016,23.7310484 29.4911384,24.2606091 28.8642547,24.2606091 C28.8642547,22.2366502 27.2838234,20.596112 25.336284,20.596112 C23.5691875,20.596112 22.1023108,21.950656 21.8472018,23.7121916 C21.8071393,24.0211939 21.5489951,24.2538857 21.2405402,24.2590377 L15.8692514,24.2590377 C15.5391988,24.254896 15.2242959,24.1184614 14.9938309,23.8797535 C14.7633659,23.6410456 14.6362213,23.3196223 14.640272,22.9862064 L14.640272,6.27283131 C14.6317241,5.57912844 15.1810016,5.00948416 15.8676959,5 Z M23.5029381,8.66666667 L21.1422232,8.66666667 C21.1422232,9.61422908 20.3658282,10.3824653 19.4082026,10.3824653 C19.094788,10.3824653 18.8007766,10.3002019 18.5471884,10.1562076 L17.3548387,12.2187924 C17.8764327,12.5146474 18.2277104,13.070892 18.2277104,13.7083333 C18.2277104,14.3457747 17.8764327,14.9020193 17.3548387,15.1978742 L18.5471884,17.2604591 C18.8007766,17.1164648 19.094788,17.0342014 19.4082026,17.0342014 C20.3658282,17.0342014 21.1420884,17.8023043 21.1420884,18.75 L23.5030729,18.75 C23.5030729,17.8023043 24.2793331,17.0342014 25.2369587,17.0342014 C25.5503733,17.0342014 25.8442499,17.1164648 26.0981076,17.2604591 L27.2903226,15.1978742 C26.7687285,14.9020193 26.4173162,14.3457747 26.4173162,13.7083333 C26.4173162,13.070892 26.7687285,12.5146474 27.2903226,12.2187924 L26.0981076,10.1562076 C25.8442499,10.3002019 25.5503733,10.3824653 25.2369587,10.3824653 C24.2793331,10.3824653 23.5029381,9.61422908 23.5029381,8.66666667 Z M9.99863347,11.1048761 L9.75596884,11.1048761 C8.76713822,11.1066739 7.82196606,11.5165249 7.13954611,12.2394245 L4.50290132,15.0003685 C4.27433048,15.2412787 4.14718955,15.5623706 4.14818689,15.8960646 L4.14818689,16.3281987 C4.14390467,16.6750121 4.41783148,16.9601588 4.76112141,16.9661857 L9.99863347,16.9661857 C10.3413098,16.9601597 10.614988,16.6759736 10.6115678,16.3297701 L10.6115678,11.7412917 C10.615844,11.3947427 10.3416753,11.1100472 9.99863347,11.1048761 Z M22.3225806,11.6916667 C23.4200239,11.6916667 24.3096774,12.5945591 24.3096774,13.7083333 C24.3096774,14.8221076 23.4200239,15.725 22.3225806,15.725 C21.2251374,15.725 20.3354839,14.8221076 20.3354839,13.7083333 C20.3354839,12.5945591 21.2251374,11.6916667 22.3225806,11.6916667 Z"
            id="形状结合"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
ManufacturingSupplierOne.displayName = 'ManufacturingSupplierOne';
export default ManufacturingSupplierOne;