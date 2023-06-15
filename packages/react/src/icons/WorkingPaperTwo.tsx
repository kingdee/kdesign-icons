import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const WorkingPaperTwo = ({
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
          id="1032.工作底稿-2"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M5.01773072,8.98052979 L16.9807434,8.98052979 C17.5276516,8.98052979 17.9710083,8.53717309 17.9710083,7.9902649 C17.9710083,7.4433567 17.5276516,7 16.9807434,7 L5.01773072,7 C4.4708225,7 4.02746582,7.4433567 4.02746582,7.9902649 C4.02746582,8.53717309 4.4708225,8.98052979 5.01773072,8.98052979 Z M5.01773072,14.9805298 L16.9807434,14.9805298 C17.5276516,14.9805298 17.9710083,14.5371731 17.9710083,13.9902649 C17.9710083,13.4433567 17.5276516,13 16.9807434,13 L5.01773072,13 C4.4708225,13 4.02746582,13.4433567 4.02746582,13.9902649 C4.02746582,14.5371731 4.4708225,14.9805298 5.01773072,14.9805298 Z M5.01773072,20.9805298 L11.0372009,20.9805298 C11.5841091,20.9805298 12.0274658,20.5371731 12.0274658,19.9902649 C12.0274658,19.4433567 11.5841091,19 11.0372009,19 L5.01773072,19 C4.4708225,19 4.02746582,19.4433567 4.02746582,19.9902649 C4.02746582,20.5371731 4.4708225,20.9805298 5.01773072,20.9805298 Z M19.9789167,0 L2,0 C0.895430496,0 0,0.895430496 0,2 L0,26 C0,27.1045695 0.895430496,28 2,28 L15.29825,28 L15.29825,28 C15.3431667,28 15.3816667,27.9804 15.42475,27.9738667 C15.6814167,28.0205333 15.9536667,27.9664 16.1690833,27.7834667 L21.6690833,23.1168 C21.8944073,22.9204681 22.0102964,22.623732 21.9789167,22.3234667 C21.9835,22.2889333 22,22.2590667 22,22.2236 L21.980814,2 C21.9778686,0.8961728 21.0827453,0.001898272 19.9789167,0 Z M2,2 L20.0028076,2 L20.0028076,20.5333333 L17.0115356,20.5333333 C15.7370605,20.5333333 14.6666667,21.3706055 14.6666667,22.5552979 L14.6666667,26 L2,26 L2,2 Z M19.6515,22.4 L16.5,25.074 L16.5,23.3333333 C16.5,22.8178676 16.9104056,22.4 17.4166667,22.4 L19.6515,22.4 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
WorkingPaperTwo.displayName = 'WorkingPaperTwo';
export default WorkingPaperTwo;
