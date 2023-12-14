import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SharedGlobally = ({
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
          id="1191-全局共享"
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
              d="M22.6181525,1.38184747 C24.5939346,3.35762948 24.3688282,6.94640599 22.466114,10.7921106 C22.2239018,10.3936867 21.9670802,9.99804411 21.6965482,9.60543195 C23.0981134,6.46352886 23.2139939,3.67659333 21.7687003,2.23129968 C20.138244,0.600843329 16.8003582,0.957202491 13.170787,2.90698622 C14.6482159,3.88006507 16.1233567,5.08047806 17.5214393,6.47856068 C19.3013486,8.25847002 20.7608745,10.1632754 21.8409727,12.0399652 L22.1868715,12.6642772 C24.3428174,16.7128085 24.6867632,20.5495418 22.6181525,22.6181525 C20.6425375,24.5937676 17.0542005,24.3688662 13.2088643,22.4665964 C13.606228,22.2239859 14.002037,21.9670554 14.3948796,21.69635 C17.536897,23.0981311 20.3235171,23.2138835 21.7687003,21.7687003 C23.3993026,20.1380981 23.0427337,16.7997609 21.0924904,13.1698129 C20.1202976,14.6477702 18.9197331,16.1231454 17.5214393,17.5214393 C15.8784461,19.1644325 14.1290326,20.5344364 12.3935466,21.5850107 L11.9600348,21.8409727 L11.3357227,22.1868715 C7.28719145,24.3428174 3.45045817,24.6867632 1.38184746,22.6181525 C-0.593767576,20.6425375 -0.368866197,17.0542005 1.53340365,13.2088643 C1.77612908,13.606367 2.0330654,14.0021805 2.30371934,14.3949552 C0.901868903,17.536897 0.78611647,20.3235171 2.23129967,21.7687003 C3.86172373,23.3991243 7.19950959,23.0428116 10.8289972,21.0931297 C9.35129972,20.1195408 7.87641378,18.9192925 6.47856067,17.5214393 C4.69865133,15.74153 3.23912549,13.8367246 2.15902731,11.9600348 L1.81312847,11.3357227 C-0.342817404,7.28719146 -0.686763215,3.45045817 1.38184746,1.38184747 C3.35779642,-0.594101495 6.94701252,-0.368790107 10.7930856,1.53436835 L10.478004,1.72789192 C10.1852456,1.91244525 9.89366746,2.10478014 9.60369787,2.30462581 C6.46237929,0.901838891 3.67629523,0.786304128 2.23129967,2.23129968 C0.600582865,3.86201649 0.957316397,7.20070835 2.90792077,10.8309525 C3.87925752,9.3527765 5.08000777,7.87711362 6.47856067,6.47856068 C8.1215539,4.83556745 9.87096739,3.46556368 11.6064534,2.41498926 L11.9997037,2.1814981 L12.0399652,2.15902732 L12.6642772,1.81312848 C16.7128085,-0.3428174 20.5495418,-0.68676321 22.6181525,1.38184747 Z M11.9978841,3.58418842 L11.7298814,3.75610048 C10.2490137,4.70583921 8.75101634,5.90500943 7.32801289,7.32801289 C5.81807649,8.83794928 4.56015716,10.4323224 3.58483711,12.0010725 C4.56149651,13.569375 5.81888027,15.1628545 7.32801289,16.6719871 C8.83794928,18.1819235 10.4323224,19.4398428 12.0010725,20.4151629 C13.569375,19.4385035 15.1628545,18.1811198 16.6719871,16.6719871 C18.1818869,15.1620872 19.439782,13.5677547 20.4150921,11.9990415 C19.4390088,10.4312654 18.181423,8.83744876 16.6719871,7.32801289 C15.1617159,5.81774173 13.5669705,4.55959936 11.9978841,3.58418842 Z M12.7590525,6.94761272 L12.9009801,7.021379 L15.8611222,8.73041782 C16.3721899,9.02548293 16.7033737,9.54993258 16.7550219,10.1311651 L16.7621023,10.2909611 L16.7621023,13.7090389 C16.7621023,14.299169 16.4735075,14.8482074 15.9959695,15.1835523 L15.8611222,15.2695822 L12.9009801,16.978621 C12.3899123,17.2736861 11.7701338,17.2982749 11.2409475,17.0523872 L11.0990199,16.978621 L8.1388778,15.2695822 C7.62781006,14.974517 7.29662627,14.4500674 7.24497804,13.8688349 L7.23789768,13.7090389 L7.23789768,10.2909611 C7.23789768,9.70083095 7.52649248,9.15179257 8.00403047,8.81644766 L8.1388778,8.73041782 L11.0990199,7.021379 C11.6100876,6.7263139 12.2298662,6.70172514 12.7590525,6.94761272 Z M8.43845368,10.6988502 L8.43920449,13.7090389 C8.43920449,13.8929755 8.52331512,14.0649361 8.66437891,14.1778824 L8.7395312,14.22922 L11.3988491,15.7636349 L11.3984432,12.4075877 L8.43845368,10.6988502 Z M15.5607955,10.6978742 L12.5999753,12.4075877 L12.6003812,15.7636349 L15.2604688,14.22922 C15.4197627,14.1372516 15.5266295,13.9784294 15.553912,13.7997914 L15.5607955,13.7090389 L15.5607955,10.6978742 Z M11.7957892,8.0170344 L11.6996733,8.06174122 L8.98602435,9.62811044 L11.9987212,11.3671059 L15.0122299,9.62713438 L12.3003268,8.06174122 C12.1454576,7.97232755 11.9606407,7.95742529 11.7957892,8.0170344 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SharedGlobally.displayName = 'SharedGlobally';
export default SharedGlobally;
