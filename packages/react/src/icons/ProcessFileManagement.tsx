import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProcessFileManagement = ({
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
          id="534.工艺文件管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M20.9636304,12.7269602 C20.9636304,13.4752396 21.5860711,14.0819071 22.3538056,14.0819071 C22.5422552,14.0819071 22.7218942,14.0453658 22.8857954,13.9791233 L23.0441939,13.9032339 L24,15.532034 C23.5818348,15.7656674 23.3001054,16.2049274 23.3001054,16.7083078 C23.3001054,17.1487655 23.5158045,17.5401312 23.8498673,17.7876066 L24,17.8845814 L23.0441939,19.5133814 C22.8406746,19.3996707 22.6050718,19.3347084 22.3538056,19.3347084 C21.6451276,19.3347084 21.0603423,19.8515424 20.9745688,20.5196801 L20.9637385,20.6896552 L19.0709227,20.6896552 C19.0709227,19.9412705 18.4485901,19.3347084 17.6808556,19.3347084 C17.4924059,19.3347084 17.3127062,19.3712498 17.1488658,19.4374921 L16.9905752,19.5133814 L16.0346612,17.8845814 C16.4528263,17.6509481 16.7344477,17.2116881 16.7344477,16.7083078 C16.7344477,16.26785 16.5188314,15.8764841 16.1847893,15.6290089 L16.0346612,15.532034 L16.9905752,13.9032339 C17.1938786,14.0169446 17.4295893,14.0819071 17.6808556,14.0819071 C18.3895336,14.0819071 18.9744109,13.5649834 19.0601987,12.8969146 L19.0710308,12.7269602 L20.9636304,12.7269602 Z M9.86399322,0.860867172 C10.4929024,1.84296685 10.8570226,2.46495397 10.8570226,2.46495397 C10.8570226,2.46495397 11.0887374,2.72682855 11.6183372,2.72682855 L20.058989,2.72682855 C20.058989,2.72682855 21.5485005,2.56314887 21.5485005,4.19994574 L21.5464232,12.9751556 C21.2668257,12.6808121 21.0959278,12.2869654 21.0959278,11.8542376 L18.790656,11.8542376 C18.790656,12.7656756 18.0324952,13.5046241 17.0973602,13.5046241 C16.7913064,13.5046241 16.5042,13.4254967 16.2565675,13.2869921 L15.0922209,15.2709439 C15.601565,15.5555199 15.9445927,16.0905585 15.9445927,16.7036984 C15.9445927,17.3168383 15.601565,17.851877 15.0922209,18.1364529 L15.8267586,19.3886897 L1.48951142,19.3896404 C1.48951142,19.3896404 0,19.618805 0,17.6546056 L0,1.77748206 C0,1.77748206 0.0331176695,0.00973710446 1.85363164,0.00973710446 L8.4075559,0.00973710446 C8.4075559,0.00973710446 9.20198813,-0.153942578 9.86399322,0.860867172 Z M20.0315899,15.395854 C19.2969335,15.395854 18.6992804,15.9937179 18.6992804,16.7286329 C18.6992804,17.4635482 19.2969335,18.0615348 20.0315899,18.0615348 C20.7662463,18.0615348 21.3638994,17.4635482 21.3638994,16.7286329 C21.3638994,15.9937179 20.7662463,15.395854 20.0315899,15.395854 Z M18.0729302,6.22962986 L3.50864433,6.22962986 C3.07833232,6.22962986 2.74732977,6.55701078 2.74732977,6.94983343 L2.74732977,7.01529669 C2.74732977,7.44087248 3.07833232,7.76823184 3.50864433,7.76823184 L18.0729302,7.76823184 C18.4701463,7.76823184 18.8011488,7.44085095 18.8011488,7.01529669 L18.8011488,6.94983343 C18.8011488,6.55698925 18.4701463,6.22962986 18.0729302,6.22962986 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProcessFileManagement.displayName = 'ProcessFileManagement';
export default ProcessFileManagement;
