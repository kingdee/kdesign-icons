import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AnswerQuestions = ({
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
          id="627.答疑"
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
              d="M19.1432113,2.64055919 C19.707333,2.64055919 20.2483497,2.86391162 20.647244,3.26148147 C21.0461383,3.65905133 21.2702348,4.19827177 21.2702348,4.76052046 L21.2702348,4.76052046 L21.2702348,17.4802878 C21.2702348,18.6511101 20.3179339,19.6002492 19.1432113,19.6002492 L19.1432113,19.6002492 L12.7621409,19.6002492 L10.6351174,21.7202103 L8.50809391,19.6002492 L2.12702348,19.6002492 C0.952300851,19.6002492 0,18.6511101 0,17.4802878 L0,17.4802878 L0,4.76052046 C0,4.19827177 0.224096454,3.65905133 0.622990737,3.26148147 C1.02188502,2.86391162 1.56290177,2.64055919 2.12702348,2.64055919 L2.12702348,2.64055919 L19.1432113,2.64055919 Z M10.4483804,15.2733373 C9.83472328,15.2733373 9.33685055,15.77121 9.33685055,16.3848671 C9.33685055,16.9985242 9.83472328,17.4963969 10.4483804,17.4963969 C11.0620375,17.4963969 11.5599102,16.9869458 11.5599102,16.3848671 C11.5599102,15.77121 11.0620375,15.2733373 10.4483804,15.2733373 Z M21.8729767,0 C23.0476992,0 24,0.942828191 24,2.10586575 L24,2.10586575 L24,16.2301322 L22.4959673,16.2301322 L22.4959673,3.59493769 C22.4959673,3.03642738 22.2718709,2.50079219 21.8729767,2.10586575 C21.4740824,1.71093931 20.9330655,1.48907194 20.3689438,1.48907196 L20.3689438,1.48907196 L3.35275606,1.48907196 L3.35275606,0 L21.8729767,0 Z M10.4483804,5.26956887 C8.60503589,5.26956887 7.11379089,6.679314 7.11379089,8.41438496 C7.11379089,8.76928583 7.41411105,9.0551782 7.77656643,9.0551782 C8.13902181,9.0551782 8.43934199,8.7791442 8.43934199,8.42424333 C8.43934199,7.36939905 9.31959076,6.55115537 10.4380245,6.55115537 C11.5461024,6.55115537 12.436707,7.40883248 12.436707,8.46367674 C12.436707,8.88758614 11.8774901,9.41993744 11.338985,9.93257205 C10.6037184,10.6226571 9.77524895,11.421184 9.77524895,12.4563116 L9.77524895,12.4563116 L9.77524895,13.5308726 C9.77524895,13.8759151 10.0755691,14.1618075 10.4380245,14.1618075 C10.8004799,14.1618075 11.1008001,13.8857735 11.1008001,13.5308726 L11.1008001,13.5308726 L11.1008001,12.46617 C11.1008001,11.9535354 11.7014404,11.3817506 12.281369,10.8296826 C13.0062798,10.1395975 13.772614,9.41993744 13.7829699,8.4538184 C13.7829699,6.69903074 12.2917249,5.26956887 10.4483804,5.26956887 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AnswerQuestions.displayName = 'AnswerQuestions';
export default AnswerQuestions;