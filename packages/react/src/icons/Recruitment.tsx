import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Recruitment = ({
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
          id="256.招聘需求"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="招聘需求"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.5714285,0 C19.3604068,0 20,0.632068598 20,1.41176471 L20,1.41176471 L20,24 C18.8927965,22.8817245 18.0662792,22.3225868 17.5204483,22.3225868 C16.9746174,22.3225868 16.1355474,22.8817245 15.0032379,24 L15.0032379,24 L12.5920455,22.3225868 L10.0444312,24 L7.48410783,22.3225868 L5.00534802,24 C3.53642827,22.8817245 2.69494557,22.3225868 2.48089971,22.3225868 C2.26685384,22.3225868 1.43988728,22.8817245 0,24 L0,24 L0,1.41176471 C0,0.632068598 0.63959328,0 1.42857143,0 L1.42857143,0 L18.5714285,0 Z M10.3333339,16.1333333 L4.77777782,16.1333333 C4.44027047,16.1333333 4.1666667,16.4069371 4.1666667,16.7444444 C4.1666667,17.0819517 4.44027047,17.3555555 4.77777782,17.3555555 L4.77777782,17.3555555 L10.3333339,17.3555555 C10.6708412,17.3555555 10.944445,17.0819517 10.944445,16.7444444 C10.944445,16.4069371 10.6708412,16.1333333 10.3333339,16.1333333 L10.3333339,16.1333333 Z M15.2222222,11.9425287 L4.77777782,11.9425287 C4.44027047,11.9425287 4.1666667,12.2161325 4.1666667,12.5536398 C4.1666667,12.8911472 4.44027047,13.1647509 4.77777782,13.1647509 L4.77777782,13.1647509 L15.2222222,13.1647509 C15.5597295,13.1647509 15.8333333,12.8911472 15.8333333,12.5536398 C15.8333333,12.2161325 15.5597295,11.9425287 15.2222222,11.9425287 L15.2222222,11.9425287 Z M9.78305452,2.46478484 C9.20694169,2.53485747 8.5339823,2.95627104 8.48183414,3.59572459 L8.48183414,4.38640464 C8.37070893,4.38640464 8.22637033,4.44572195 8.27386237,4.91048279 C8.30335089,5.201162 8.43275126,5.36045502 8.58112757,5.49458797 L8.76310772,5.65026917 C8.79322919,5.67646936 8.82281472,5.7033628 8.85121685,5.73179927 C9.07843374,5.95896498 9.02845844,6.32171308 9.38356247,6.50683518 C9.38356247,6.50683518 9.38759775,6.51009438 9.39566829,6.51498318 C9.38138966,6.53127913 9.39008099,6.55018247 9.42857131,6.5710413 L9.42857131,7.01885432 C9.42857131,7.01885432 8.52994701,7.33760334 8.10624333,7.48296331 C7.68253965,7.6283233 7.33333334,8.20031154 7.33333334,8.96296257 L12.9206346,8.96296257 C12.9206346,8.20031154 12.5714283,7.6283233 12.1663489,7.48296331 C11.8217986,7.38127652 10.8253965,7.01885432 10.8253965,7.01885432 L10.8253965,6.57071535 C10.8809592,6.54040489 10.8747512,6.51498318 10.8260174,6.49412435 C11.1565995,6.30509118 11.1227651,5.95375023 11.3357035,5.73147332 C11.5529874,5.50398172 11.8658763,5.3749177 11.913058,4.91015684 C11.9602396,4.44507009 11.6904971,4.38607872 11.6904971,4.38607872 L11.6904971,3.49566738 C11.5865112,2.73399411 10.363513,2.3487576 9.78305452,2.46478484 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Recruitment.displayName = 'Recruitment';
export default Recruitment;
