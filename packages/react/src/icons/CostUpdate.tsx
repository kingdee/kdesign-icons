import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CostUpdate = ({
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
          id="749.成本更新"
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
              d="M14.9786245,5.80378708 C18.4916719,7.07815046 21.5574869,10.3619608 22.9707709,14.1058238 C22.556672,14.035658 22.1325002,14 21.7,14 C19.8388063,14 18.1318434,14.6603409 16.800616,15.7595182 L16.8007633,15.4 L12.6,15.4 L12.6,14 L11.2,14 L11.2,15.4 L7.00076325,15.4 C7.06522158,15.4 7.04717325,15.4777111 7.02582465,15.533663 L7.00076325,15.5897242 L7.00076325,16.8 L11.2,16.8 L11.2,19.6 L7,19.6 L7,21 L11.2,21 L11.2,23.8 L12.6,23.8 L12.6,21 L14.0313405,21.0005506 C14.0105969,21.2309251 14,21.464225 14,21.7 C14,24.0430481 15.0465199,26.1416686 16.6976316,27.553933 C15.3213691,27.8515517 13.7261138,28 11.8999154,28 C3.51647484,28 0,24.8714872 0,18.442158 C0,13.1158197 3.98750862,7.55736567 8.82137544,5.80378708 L14.9786245,5.80378708 Z M21.7,15.4 C25.179394,15.4 28,18.220606 28,21.7 C28,25.179394 25.179394,28 21.7,28 C18.220606,28 15.4,25.179394 15.4,21.7 C15.4,18.220606 18.220606,15.4 21.7,15.4 Z M21.7,16.898614 C18.9938048,16.898614 16.8,19.0924188 16.8,21.798614 C16.8,24.5048093 18.9938048,26.698614 21.7,26.698614 C23.0160032,26.698614 24.2511045,26.1764852 25.1635429,25.2647171 C25.4370103,24.9914505 25.4371733,24.548235 25.1639067,24.2747677 C24.8906402,24.0013003 24.4474247,24.0011373 24.1739572,24.2744039 C23.5214385,24.9264434 22.6410647,25.298614 21.7,25.298614 C19.7670033,25.298614 18.2,23.7316107 18.2,21.798614 C18.2,19.8656174 19.7670033,18.298614 21.7,18.298614 C22.7051145,18.298614 23.6401341,18.7236515 24.3003058,19.455826 L24.3869702,19.5370605 L24.4833267,19.6009108 L23.1,19.6 C22.7134006,19.6 22.4,19.9134006 22.4,20.3 C22.4,20.6436439 22.6476253,20.9294518 22.9741742,20.988722 L23.1,21 L25.2,21 C25.4421556,21 25.6555922,20.8770391 25.7812792,20.6901481 L26.8538621,18.8226293 C27.0471618,18.4878245 26.9324492,18.0597112 26.5976444,17.8664115 C26.3000401,17.6945896 25.9287105,17.7661354 25.7141065,18.0192999 L25.6414266,18.1226293 L25.3806,18.573014 L25.3400595,18.5183229 C24.417132,17.4947346 23.1057548,16.898614 21.7,16.898614 Z M15.7595182,16.800616 C15.0900401,17.6114294 14.5833566,18.5616287 14.2895158,19.6011659 L12.6,19.6 L12.6,16.8 L15.7595182,16.800616 Z M11.2,12.6 L9.8,12.6 L9.8,14 L11.2,14 L11.2,12.6 Z M14,12.6 L12.6,12.6 L12.6,14 L14,14 L14,12.6 Z M9.8,11.2 L8.4,11.2 L8.4,12.6 L9.8,12.6 L9.8,11.2 Z M15.4,11.2 L14,11.2 L14,12.6 L15.4,12.6 L15.4,11.2 Z M16.8,9.8 L15.4,9.8 L15.4,11.2 L16.8,11.2 L16.8,9.8 Z M8.4,9.8 L7,9.8 L7,11.2 L8.4,11.2 L8.4,9.8 Z M11.6467999,0.000118046005 C13.8113285,-0.009132678 16.2042668,0.528398386 16.2042668,0.528398386 L16.2288034,0.578959638 C16.5108551,0.69558241 16.7118854,0.979353898 16.7118854,1.31463998 C16.7118854,1.3837733 16.6901241,1.44520947 16.6743192,1.50858758 L16.7105994,1.58502968 L14.6850999,4.22657261 L8.6085337,4.22657261 L6.58300031,1.58502968 L6.61731764,1.51328355 C6.60080201,1.44828127 6.57873605,1.38483254 6.57873605,1.31463998 C6.57873605,0.97825935 6.78152628,0.694064166 7.06533786,0.578465326 L7.08936676,0.528398386 L7.81131375,0.393382694 L8.35894926,0.303138582 C9.26529388,0.161634394 10.5186669,0.004894286 11.6467999,0.000118046005 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CostUpdate.displayName = 'CostUpdate';
export default CostUpdate;
