import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Abs = ({
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
          id="1128And"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 10.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11.9528609,3.63636365 C11.9686146,3.81439811 11.9818017,3.96179572 11.9934842,4.09387484 C12.4069737,3.97243354 12.801258,3.85022634 13.199348,3.74103978 C13.9752605,3.52819835 15.2772393,3.91830836 15.6100135,4.74456887 C15.7606469,5.11876473 15.8097665,5.56785078 15.7670192,5.96936452 C15.6749753,6.83587855 15.4955781,7.69379724 15.3483079,8.55469447 C15.2745842,8.98505797 15.2248451,9.42231483 15.1078431,9.84195542 C14.9027799,10.5775817 14.9453502,10.6822578 15.6670099,10.8352722 C15.7831711,11.5233262 15.7280512,11.6275682 15.0962211,11.6356972 L12.7647903,11.6363636 C12.5113751,11.6363636 12.2555438,11.6363636 11.9964933,11.6363636 C12.0732261,11.3357602 12.1348247,11.0946647 12.2048312,10.8203793 C12.3217446,10.8059119 12.471316,10.825145 12.5715023,10.7663391 C12.7456777,10.664131 12.9964089,10.5343496 13.0285357,10.380229 C13.2438654,9.34691396 13.4102524,8.30415258 13.5918622,7.26428473 C13.6572665,6.88966336 13.729574,6.51597812 13.7832073,6.13973978 C13.8738351,5.50393877 13.7204581,5.15850757 13.2949321,4.99987645 C12.835155,4.82839484 12.1319926,5.01621616 11.8502851,5.43483551 C11.6873497,5.67695223 11.5591962,5.96238611 11.5019342,6.24458611 C11.3451056,7.01748734 11.2347414,7.79906903 11.1046409,8.57699135 C11.0301207,9.02233287 10.9853378,9.47516349 10.8695749,9.91046299 C10.6822124,10.6154524 10.7075245,10.6893214 11.4075892,10.833485 C11.5175109,11.494987 11.3948447,11.6361722 10.7101796,11.6362572 C9.73973586,11.6363636 8.76929208,11.6363636 7.80442401,11.6363636 C7.72565563,11.0698148 7.83867499,10.9217364 8.36757345,10.7625946 C8.60414399,10.6913638 8.77823092,10.568646 8.82628852,10.270702 C9.04117564,8.93663462 9.29349985,7.60826916 9.53254851,6.27786123 C9.58981047,5.95932248 9.62689352,5.63576263 9.71079513,5.32386183 C9.83319577,4.86873346 9.60857323,4.69989005 9.18508275,4.65657281 C9.13029891,4.65095609 9.07843571,4.61980853 9.00639366,4.59368204 C9.07162095,4.34050204 9.13392757,4.09864058 9.19703075,3.8536304 C10.1131332,3.78146351 11.0171991,3.71014758 11.9528609,3.63636365 Z M5.51737823,4.08293572 C5.58884794,4.13475877 5.82158763,4.14142415 5.8466459,4.10409818 C6.09605862,3.73150539 6.50781386,3.83648458 6.87715526,3.82740307 C7.23060371,3.81873811 7.58463715,3.82557004 8,3.82557004 C7.74356705,5.00533623 7.49639694,6.09645325 7.27174997,7.1910696 C7.11038248,7.97649725 6.97943592,8.76650735 6.83376644,9.55435112 C6.81368082,9.66324625 6.79847034,9.77414095 6.76132169,9.87895345 C6.54623005,10.4867497 6.62442745,10.5948116 7.41351933,10.6989576 C7.41917453,10.8095191 7.42034458,10.928912 7.43233745,11.0476385 C7.46558597,11.3775731 7.32108646,11.5182952 6.90601617,11.5038814 C6.17708362,11.4786364 5.4455185,11.5091303 4.71609845,11.4879679 C4.54176307,11.4828855 4.37181529,11.3663253 4.17729679,11.2925066 C3.6220171,11.4031513 2.9781072,11.6490193 2.34160751,11.6358552 C0.549892107,11.5986126 -0.268450703,10.5338236 0.0778799977,9.06403171 C0.278053699,8.21470009 0.453169104,7.35986947 0.596986063,6.50228947 C0.798914808,5.29902801 1.40616359,4.32863703 2.77959106,3.88055914 C3.69173176,3.5829515 4.65749912,3.46130895 5.51737823,4.08293572 Z M24,0 C23.943425,0.367848225 23.9060945,0.679370765 23.846134,0.986924305 C23.6934262,1.76847513 23.5249486,2.54732364 23.373399,3.32912778 C23.2323626,4.05688633 23.1078086,4.78760043 22.9711378,5.51620342 C22.8088969,6.38118721 22.6406867,7.24524204 22.4767529,8.10997252 C22.346586,8.79694343 22.209737,9.48290103 22.0940925,10.1720676 C22.0365375,10.5152575 22.1573495,10.5998727 22.7222081,10.6774788 C22.9317581,11.3390314 22.8168263,11.4973683 22.1283939,11.4967772 C21.5197009,11.4961861 20.9103843,11.5102041 20.3027604,11.4860525 C20.1431033,11.479719 19.9887026,11.3557518 19.8486462,11.2932615 C19.2875297,11.4095442 18.6797276,11.6603497 18.085468,11.6345092 C16.4911236,11.5649254 15.7840705,10.5461648 16.0574121,9.09672794 C16.1428536,8.64384225 16.2614382,8.19661449 16.348038,7.7439821 C16.4847089,7.02973505 16.5468076,6.29716307 16.7505665,5.60124088 C17.02471,4.66506881 17.7181318,4.04286821 18.6897953,3.73286576 C19.3122979,3.53424792 19.9533321,3.43333456 20.5850115,3.7191854 C20.77897,3.8070096 20.9604553,3.9195766 21.2389644,4.07014437 C21.3393738,3.62857448 21.4408523,3.23049447 21.5182753,2.82819215 C21.602915,2.38864903 21.6933459,1.9469102 21.7214106,1.50263804 C21.7308546,1.35316808 21.5950748,1.10717585 21.4600076,1.05346802 C20.9522586,0.851556804 20.9420128,0.874441821 21.1487118,0.368270468 C21.1698272,0.316504862 21.1915662,0.264992612 21.210276,0.220067139 C22.1324031,0.147358868 23.0431261,0.0754950341 24,0 Z M2.67484592,5.81059325 C2.5678851,6.25417201 2.45526912,6.69700087 2.36371379,7.14299578 C2.2052714,7.91425957 2.06116194,8.68768962 1.90067197,9.51394248 C1.88780158,9.8305464 2.05979689,10.1150733 2.41792547,10.3290309 C2.84927882,10.5867298 3.24923618,10.447924 3.64090579,10.2692095 C4.42092991,9.91352997 4.46071115,9.22891564 4.60257804,8.60662234 C4.80557933,7.7162155 4.95807403,6.81747704 5.14371976,5.92398743 C5.21450697,5.58347164 4.96821433,5.17396946 4.63611907,4.98159091 C3.92444458,4.56942263 2.81768783,5.21887725 2.67484592,5.81059325 Z M18.4073444,6.19280409 C18.3278033,6.56644641 18.2117723,6.93512982 18.1296249,7.30848466 C17.9830359,7.97405528 17.8497486,8.64156633 17.7001037,9.35981623 C17.6954301,9.62594385 17.84867,9.87388888 18.1782483,10.0586617 C18.5753241,10.2813092 18.9457963,10.1635892 19.3057529,10.007851 C20.0380692,9.69120008 20.0661108,9.08872975 20.1974208,8.53872305 C20.3722312,7.8059558 20.5053388,7.06686407 20.6800593,6.33416867 C20.7684082,5.96332916 20.5556698,5.63755105 20.1905902,5.43085832 C19.6275119,5.11212328 18.52724,5.62935804 18.4073444,6.19280409 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Abs.displayName = 'Abs';
export default Abs;
