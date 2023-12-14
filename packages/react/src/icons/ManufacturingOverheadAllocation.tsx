import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ManufacturingOverheadAllocation = ({
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
          id="691.制造费用分配"
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
              d="M17.3333333,10.6666667 C21.0152267,10.6666667 24,13.65144 24,17.3333333 C24,21.0152267 21.0152267,24 17.3333333,24 C13.65144,24 10.6666667,21.0152267 10.6666667,17.3333333 C10.6666667,13.65144 13.65144,10.6666667 17.3333333,10.6666667 Z M0,16.3706667 C1.524,17.1773333 2.59066666,17.824 4.26666667,18.308 C5.81599999,18.7186667 7.69333334,19.0133333 9.528,19.0946667 C9.82624001,20.4194533 10.4577333,21.6461867 11.3626667,22.6586667 C11.128,22.664 10.896,22.6666667 10.6666667,22.6666667 C8.076,22.6666667 5.48533334,22.1826667 3.35200001,21.536 C1.21866667,20.8906667 0,19.9226667 0,18.7933333 L0,16.3706667 Z M19.58124,13.3303067 L17.3333333,15.1111067 L15.1005333,13.3303067 L14.2333067,13.9818933 L16.9072667,15.8584267 L17.0866667,15.9933333 L14.2333067,15.99396 L14.2333067,16.88184 L16.896,16.8813333 L16.896,18.6573333 L14.2333067,18.6576 L14.2333067,19.54548 L16.896,19.5453333 L16.8969467,22.20912 L17.7379733,22.20912 L17.7373333,19.5453333 L20.44848,19.54548 L20.44848,18.6576 L17.7373333,18.6573333 L17.7373333,16.8813333 L20.44848,16.88184 L20.44848,15.99396 L17.5933333,15.9933333 L17.7745067,15.8584267 L20.44848,13.9818933 L19.58124,13.3303067 Z M0,11.3333333 C1.524,12.1413333 2.59066666,12.7866667 4.26666667,13.272 C6.06133334,13.7106667 7.98133334,14.016 10.0266667,14.0706667 C9.53287999,15.1755867 9.29714666,16.3784267 9.33733334,17.588 C7.30717334,17.45544 5.29893334,17.0903867 3.35200001,16.5 C1.21866667,15.8533333 0,14.8866667 0,13.756 L0,11.3333333 Z M21.3333333,6.29599999 L21.3333333,8.45599999 C21.3333333,8.92000001 21.008,9.432 20.4,9.94266667 C19.4279867,9.53922667 18.3857467,9.33213334 17.3333333,9.33333334 C14.6906667,9.33333334 12.3466667,10.6146667 10.8893333,12.5906667 L10.6666667,12.592 C8.076,12.592 5.48533334,12.0533333 3.35200001,11.3333333 C1.21866667,10.4333333 0,9.35599999 0,8.27466667 L0,6.29599999 C1.524,7.01599999 2.59066666,7.91466667 4.26666667,8.27466667 C6.24799999,8.81466667 8.38133333,9.17466667 10.6666667,9.17466667 C12.952,9.17466667 15.0853333,8.81466667 17.0666667,8.27466667 C18.7426667,7.91466667 19.8093333,7.01599999 21.3333333,6.29599999 Z M10.6666667,0 C13.14,0 15.9226667,0.482666664 17.9333333,1.12666666 C20.0946667,1.92933334 21.3333333,2.89333334 21.3333333,3.85866667 C21.3333333,4.824 20.2506667,5.78666666 17.9333333,6.43066666 C15.9226667,7.23466666 13.14,7.55599999 10.6666667,7.55599999 C8.03866666,7.55599999 5.41066666,7.23466666 3.40000001,6.43066666 C1.08400001,5.78666666 0,4.824 0,3.85733333 C0,2.89466666 1.23733334,1.92933334 3.40000001,1.12666666 C5.412,0.322666656 8.04,0 10.6666667,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ManufacturingOverheadAllocation.displayName = 'ManufacturingOverheadAllocation';
export default ManufacturingOverheadAllocation;
