import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PropertyTaxSourceInformation = ({
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
          id="547.房产税源信息"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11.6157934,4.02678671 L20.5684808,12.5902268 L20.5684808,21.9321615 C20.5684808,22.3314014 20.2679506,22.6604488 19.8807751,22.7054186 L19.7899862,22.7106561 L17.4545026,22.7106561 L17.4545026,13.3687214 L12.7835352,13.3687214 L12.7835352,22.7106561 L4.22009508,22.7106561 C3.82085517,22.7106561 3.49180784,22.4101259 3.44683804,22.0229504 L3.44160052,21.9321615 L3.44160052,12.5902268 L11.6157934,4.02678671 Z M10.4480515,13.3687214 L5.7770842,13.3687214 L5.7770842,18.0396887 L10.4480515,18.0396887 L10.4480515,13.3687214 Z M12.6330727,0.34926576 L12.7335397,0.438636088 C12.7337217,0.438812414 12.7339037,0.43898879 12.7335565,0.439710859 L17.453848,5.01739742 L17.4545026,3.63753943 C17.4545026,2.99261344 17.9773184,2.46979759 18.6222444,2.46979759 C19.2671704,2.46979759 19.7899862,2.99261344 19.7899862,3.63753943 L19.7893317,7.28203811 L23.6705757,11.0453052 C24.1004254,11.4621292 24.1109848,12.1484939 23.6941609,12.5783435 L23.682459,12.5902268 L23.682459,12.5902268 C23.2503169,13.0223689 22.5515899,13.0284976 22.111934,12.6040023 L11.6157934,2.46979759 L1.87033066,12.5762033 C1.45587116,13.0060132 0.771455619,13.0184572 0.341645759,12.6039976 L0.327622295,12.5902268 L0.327622295,12.5902268 C-0.104312643,12.1582919 -0.109856546,11.4597161 0.315168748,11.0209803 L10.5324478,0.474111575 C11.0987556,-0.111499086 12.0132399,-0.156363216 12.6330727,0.34926576 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PropertyTaxSourceInformation.displayName = 'PropertyTaxSourceInformation';
export default PropertyTaxSourceInformation;