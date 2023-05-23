import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProjectTeam = ({
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
          id="1286-项目型团队"
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
              d="M10.3764718,19.1987038 L2.70163833,19.1987038 C2.46764155,19.2003472 2.24267417,19.1068274 2.07664191,18.9388898 C1.91060963,18.7709524 1.81723996,18.5424824 1.8172455,18.3041626 L1.8172455,9.6672136 L14.1926873,9.6672136 C14.6945058,9.6672136 15.1013101,9.25290353 15.1013101,8.74182621 C15.1013101,8.23074886 14.6945058,7.81643882 14.1926873,7.81643882 L1.8172455,7.81643882 L1.8172455,6.3234805 C1.8172455,5.82943907 2.21048964,5.42893938 2.69558081,5.42893936 L17.1669124,5.42893936 C17.6539747,5.43230252 18.048003,5.83360087 18.0513053,6.32964976 L18.0513053,7.3414066 C18.0513053,7.85248393 18.4581096,8.26679394 18.9599281,8.26679394 C19.4617464,8.26679394 19.8685507,7.85248393 19.8685508,7.3414066 L19.8685508,6.32964976 C19.8685508,4.81004644 18.6589861,3.57816458 17.1669124,3.57816458 L5.69403588,3.57816458 L5.69403588,2.75148516 C5.69403591,2.25744372 6.08728002,1.85694404 6.57237124,1.85694404 L21.0437029,1.85694404 C21.5297837,1.85693241 21.9247663,2.25644749 21.9280956,2.75148516 L21.9280956,8.0508703 C21.9280956,8.56194765 22.3348999,8.97625769 22.8367184,8.97625769 C23.3385369,8.97625769 23.7453412,8.56194765 23.7453412,8.0508703 L23.7453412,2.75148516 C23.7453412,1.23188186 22.5357764,0 21.0437029,0 L6.57237124,0 C5.08266374,0.00340180227 3.87678667,1.23428785 3.87679041,2.75148516 L3.87679041,3.56582606 L2.69558081,3.56582606 C1.20823463,3.56921866 0.00333113583,4.79635336 0,6.31114201 L0,18.3041626 C0.0033401758,19.821356 1.2119271,21.0494784 2.70163833,21.0494784 L10.3764718,21.0494784 C10.8782302,21.0494784 11.2849408,20.6351072 11.2849408,20.124091 C11.2849408,19.613075 10.8782302,19.1987902 10.3764718,19.1987038 L10.3764718,19.1987038 Z M21.4313819,15.9043246 C22.4278352,14.8899173 22.7261018,13.3640342 22.187078,12.0383071 C21.6480543,10.71258 20.3779128,9.84814053 18.9690143,9.84814053 C17.5601158,9.84814053 16.2899744,10.71258 15.7509505,12.0383071 C15.2119267,13.3640342 15.5101933,14.8899173 16.5066466,15.9043246 C14.8954948,16.4888478 13.8532,18.0823911 13.9443305,19.8217979 C13.9443305,21.3332639 16.125025,21.3332639 19.1355951,21.3332639 L20.9528405,21.3332639 C22.23097,21.3332639 23.1153627,21.2530638 23.6241914,20.716339 C23.8681901,20.4705051 24.0037291,20.1343113 23.9999219,19.7847824 C23.9694682,17.8723152 23.0850753,16.533588 21.4313819,15.9043246 L21.4313819,15.9043246 Z M18.9599281,11.3884341 C20.0505469,11.3884341 20.9346682,12.288868 20.9346682,13.3996094 C20.9346682,14.5103508 20.0505469,15.4107846 18.9599281,15.4107846 C17.8693092,15.4107846 16.985188,14.5103508 16.985188,13.3996094 C16.985188,12.288868 17.8693092,11.3884341 18.9599281,11.3884341 Z M20.1229651,19.8156287 L19.1355951,19.8156287 C17.9102078,19.8677648 16.6827525,19.797511 15.4708166,19.6058742 C15.5980239,17.4959909 17.4213268,17.0456357 18.9599281,17.0456357 C21.9886705,17.0456357 22.4248095,18.5324247 22.4550968,19.7107514 C21.6838297,19.8323366 20.9020066,19.8695639 20.1229651,19.8217979 L20.1229651,19.8156287 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProjectTeam.displayName = 'ProjectTeam';
export default ProjectTeam;
