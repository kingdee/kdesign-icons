import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PayrollCollaborationOperations = ({
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
          id="732.薪资协作操作"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M5.86635791,1.46589474 L5.86666668,4.40000003 L16.1333334,4.40000003 L16.133179,1.46589474 L20.6238015,1.46666668 C21.383855,1.46666668 22,2.08299969 22,2.84270643 L22,25.0239604 C22,25.783926 21.3653088,26.4000001 20.6238015,26.4000001 L1.37619854,26.4000001 C0.616145072,26.4000001 0,25.783667 0,25.0239604 L0,2.84270643 C0,2.08274066 0.634691238,1.46666668 1.37619854,1.46666668 L5.86635791,1.46589474 Z M9.69833334,8.34166668 L7.68166668,8.34166668 C6.67333335,8.34166668 6.67333335,12.375 6.67333335,13.3833334 C6.67333335,14.3916667 8.69000004,15.4 8.69000004,15.4 L8.69000004,22.4583333 L13.7316667,22.4583333 L13.7316667,15.4 C13.8325,15.2991667 15.7483334,14.3916667 15.7483334,13.3833334 C15.7483334,12.375 15.7483334,8.34166668 14.74,8.34166668 L12.7233334,8.34166668 C12.7233334,8.34166668 13.7316667,11.3666667 12.7233334,12.375 C12.2191667,12.8791667 11.715,13.1816667 11.2108334,13.1816667 C10.7066667,13.1816667 10.2025,12.8791667 9.69833334,12.375 C8.69000004,11.3666667 9.69833334,8.34166668 9.69833334,8.34166668 Z M8.48833335,9.35000004 C8.18583334,10.56 8.08500002,12.1733333 8.99250002,13.0808333 C9.69833334,13.7866667 10.4041667,14.0891668 11.2108334,14.0891668 C12.0175,14.0891668 12.7233334,13.6858334 13.4291667,13.0808333 C14.3366668,12.1733333 14.2358333,10.56 14.0341667,9.35000004 L14.4375,9.35000004 C14.5383333,9.75333335 14.74,10.7616667 14.74,13.3833334 C14.6391667,13.585 14.0341667,14.0891668 13.3283334,14.4925 L12.7233334,14.7950001 L12.7233334,21.45 L9.69833334,21.45 L9.69833334,14.7950001 L9.09333335,14.4925 C8.48833335,14.19 7.78250003,13.585 7.68166668,13.3833334 C7.68166668,10.7616667 7.88333336,9.75333335 8.08500002,9.35000004 L8.48833335,9.35000004 Z M11.715,15.4 L10.7066667,15.4 L10.7066667,20.4416668 L11.715,20.4416668 L11.715,15.4 Z M14.6666668,0 L14.6666668,2.93333335 L7.33333335,2.93333335 L7.33333335,0 L14.6666668,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PayrollCollaborationOperations.displayName = 'PayrollCollaborationOperations';
export default PayrollCollaborationOperations;
