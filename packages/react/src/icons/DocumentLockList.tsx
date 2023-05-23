import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DocumentLockList = ({
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
          id="1423-单据锁定列表"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14.4107143,0 C14.6509769,0 14.8802093,0.0973625143 15.0425607,0.268365833 L15.0425607,0.268365833 L20.3461321,5.85457273 C20.4910413,6.00720431 20.5714286,6.20673792 20.5714286,6.41379311 L20.5714286,6.41379311 L20.5714286,22.0551724 C20.5714286,23.1327215 19.6565415,24 18.5357143,24 L18.5357143,24 L2.03571429,24 C0.914900517,24 0,23.1327177 0,22.0551724 L0,22.0551724 L0,1.94482757 C0,0.867295214 0.914904686,0 2.03571429,0 L2.03571429,0 L14.4107143,0 Z M13.2025714,1.65514286 L2.03571429,1.65514286 C1.85470925,1.65514286 1.71428571,1.78828863 1.71428571,1.94482757 L1.71428571,1.94482757 L1.71428571,22.0551724 C1.71428571,22.2117204 1.85470118,22.3448276 2.03571429,22.3448276 L2.03571429,22.3448276 L18.5357143,22.3448276 C18.716737,22.3448276 18.8571429,22.2117281 18.8571429,22.0551724 L18.8571429,22.0551724 L18.8571429,8.10942857 L14.0571429,8.11012989 C13.6175693,8.11012989 13.2552795,7.7792383 13.2057666,7.35294797 L13.2,7.25298704 L13.2,1.69870129 L13.2025714,1.65514286 Z M10.0714286,7.71428571 C12.0438837,7.71428571 13.2089409,9.08617594 13.2820534,10.7213594 L13.2857143,10.8857143 L13.2857143,12.8571429 L14.4857143,12.8571429 C14.9252878,12.8571429 15.2875776,13.1880345 15.3370905,13.6143248 L15.3428571,13.7142857 L15.3428571,18.3428571 C15.3428571,18.816244 14.9591012,19.2 14.4857143,19.2 L14.4857143,19.2 L6,19.2 C5.52661311,19.2 5.14285714,18.816244 5.14285714,18.3428571 L5.14285714,18.3428571 L5.14285714,13.7142857 C5.14285714,13.2408988 5.52661311,12.8571429 6,12.8571429 L6,12.8571429 L6.85714286,12.8571429 L6.85714286,10.8857143 C6.85714286,9.17915956 8.0332249,7.71428571 10.0714286,7.71428571 Z M13.6277143,14.5714286 L6.85714286,14.5714286 L6.85714286,17.4857143 L13.6277143,17.4857143 L13.6277143,14.5714286 Z M10.0714286,9.42857143 C9.12557143,9.42857143 8.62560428,9.9893015 8.57559626,10.7560722 L8.57142857,10.8857143 L8.57142857,12.8571429 L11.5714286,12.8571429 L11.5714286,10.8857143 C11.5714286,10.0533356 11.0698333,9.42857143 10.0714286,9.42857143 Z M18.534,6.39514286 L14.9142857,2.58257143 L14.9142857,6.39514286 L18.534,6.39514286 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DocumentLockList.displayName = 'DocumentLockList';
export default DocumentLockList;
