import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FeedbackMessage = ({
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
          id="1373-反馈信息"
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
              d="M1.04452173,20.4292174 L4.77704348,16.6831304 L21.4956522,16.6831304 C22.3024682,16.6831304 22.9565217,16.0290768 22.9565217,15.2222609 L22.9565217,2.50434783 C22.9565217,2.11690113 22.8026091,1.74532323 22.528643,1.47135704 C22.2546768,1.19739085 21.8830989,1.04347824 21.4956522,1.04347824 L2.50434783,1.04347824 C2.11821565,1.04402383 1.74823933,1.19851356 1.47638009,1.47272317 C1.20452085,1.74693278 1.05322166,2.11822526 1.05599998,2.50434783 L1.04556522,20.4292174 L1.04452173,20.4292174 Z M21.4956522,6.95096155e-16 C22.8787653,6.95096155e-16 24,1.12123471 24,2.50434783 L24,15.2233044 C24,16.6064175 22.8787653,17.7276522 21.4956522,17.7276522 L5.21113043,17.7276522 L8.68870193e-16,22.9565217 L0.0125217391,2.50434783 C0.00974796461,1.84147636 0.27098717,1.20477288 0.738535968,0.734874592 C1.20608477,0.264976303 1.84147078,0.00054890347 2.50434783,6.95096155e-16 L21.4956522,6.95096155e-16 L21.4956522,6.95096155e-16 Z M11.4782609,5.2173913 L11.4782609,10.4347826 L12.5217391,10.4347826 L12.5217391,5.2173913 L11.4782609,5.2173913 L11.4782609,5.2173913 Z M11.4782609,11.4782609 L11.4782609,12.5217391 L12.5217391,12.5217391 L12.5217391,11.4782609 L11.4782609,11.4782609 L11.4782609,11.4782609 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FeedbackMessage.displayName = 'FeedbackMessage';
export default FeedbackMessage;
