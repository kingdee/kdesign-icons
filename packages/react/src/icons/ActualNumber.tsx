import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ActualNumber = ({
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
          id="874.实际数"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(3.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M22.1529412,7.94376471 C19.6691765,8.93694118 16.2317647,9.33388235 13.1764706,9.33388235 C9.93011765,9.33388235 6.68376471,8.93694118 4.2,7.94376471 C1.33905882,7.14823529 9.14301314e-16,5.95905882 9.14301314e-16,4.76494118 C9.14301314e-16,3.57576471 1.52847059,2.38329412 4.2,1.39176471 C6.68541176,0.398588235 9.93176471,4.57150657e-16 13.1764706,4.57150657e-16 C16.2317647,4.57150657e-16 19.6691765,0.596235294 22.1529412,1.39176471 C24.8228235,2.38329412 26.3529412,3.57411765 26.3529412,4.76658824 C26.3529412,5.95905882 25.0155294,7.14823529 22.1529412,7.94376471 M22.2122353,14 C19.7647059,14.8894118 16.3767059,15.5548235 13.1764706,15.5548235 C9.97623529,15.5548235 6.776,14.8894118 4.14070588,14 C1.50541176,12.8882353 9.14301314e-16,11.5574118 9.14301314e-16,10.2216471 L9.14301314e-16,7.77741176 C1.88258824,8.66682353 3.20023529,9.77694118 5.27058824,10.2216471 C7.71811765,10.8887059 10.3534118,11.3334118 13.1764706,11.3334118 C15.9995294,11.3334118 18.6348235,10.8887059 21.0823529,10.2216471 C23.1527059,9.77694118 24.4703529,8.66682353 26.3529412,7.77741176 L26.3529412,10.4456471 C26.3529412,11.5574118 24.8475294,12.8882353 22.2122353,14 M22.2122353,20.3823529 C19.7647059,21.1795294 16.3767059,21.7774118 13.1764706,21.7774118 C9.97623529,21.7774118 6.776,21.1795294 4.14070588,20.3823529 C1.50541176,19.5835294 9.14301314e-16,18.3894118 9.14301314e-16,16.9927059 L9.14301314e-16,14 C1.88258824,14.9981176 3.20023529,15.7952941 5.27058824,16.3948235 C7.71811765,16.9927059 10.3534118,17.3912941 13.1764706,17.3912941 C15.9995294,17.3912941 18.6348235,16.9927059 21.0823529,16.3948235 C23.1527059,15.7952941 24.4703529,14.9981176 26.3529412,14 L26.3529412,16.9927059 C26.3529412,18.3877647 24.8475294,19.5835294 22.2122353,20.3823529 M13.1764706,28 C9.97623529,28 6.776,27.4021176 4.14070588,26.6032941 C1.50541176,25.8061176 9.14301314e-16,24.6103529 9.14301314e-16,23.2152941 L9.14301314e-16,20.2225882 C1.88258824,21.2190588 3.20023529,22.0178824 5.27058824,22.6157647 C7.52870588,23.2152941 10.3534118,23.6138824 12.9887059,23.6138824 C15.8117647,23.6138824 18.4470588,23.2152941 20.8945882,22.6157647 C23.1527059,22.0178824 24.4703529,21.2190588 26.3529412,20.2225882 L26.3529412,23.2152941 C26.3529412,24.4110588 24.8475294,25.6084706 22.2122353,26.6032941 C19.7647059,27.6014118 16.1889412,28 13.1764706,28"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ActualNumber.displayName = 'ActualNumber';
export default ActualNumber;
