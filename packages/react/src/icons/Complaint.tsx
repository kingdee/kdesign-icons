import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Complaint = ({
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
          id="167.投诉"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="投诉"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M13.3839236,0.382746829 C13.7360147,0.59423242 14.0323204,0.883446236 14.2489919,1.22711032 L23.6078678,16.0712885 C24.3722902,17.2837442 23.9849859,18.8714887 22.7427996,19.6176152 C22.3265674,19.8676275 21.847422,20 21.3586905,20 L2.64093857,20 C1.18238848,20 0,18.8459111 0,17.4222701 C0,16.945236 0.135618355,16.4775587 0.39176128,16.0712885 L9.75063729,1.22711032 C10.5150596,0.0146547191 12.1417373,-0.363379678 13.3839236,0.382746829 Z M11.1719238,1.96628831 L11.1116309,2.05186216 L1.75275492,16.8960404 C1.65280737,17.0545679 1.6,17.2366732 1.6,17.4222701 C1.6,17.9432905 2.00822021,18.3743041 2.53424824,18.4261456 L2.64093857,18.4313725 L21.3586905,18.4313725 C21.5524928,18.4313725 21.7423448,18.3789225 21.9069326,18.280062 C22.3636908,18.0057074 22.5248406,17.4449602 22.2975409,16.9862969 L22.2468742,16.8960404 L12.8879982,2.05186216 C12.824313,1.95085071 12.7429193,1.86169241 12.6477171,1.78829676 L12.5480566,1.72030012 C12.0873605,1.44358026 11.492306,1.5578824 11.1719238,1.96628831 Z M12,16.8627451 C12.6627417,16.8627451 13.2,16.3360213 13.2,15.6862745 C13.2,15.0365278 12.6627417,14.5098039 12,14.5098039 C11.3372583,14.5098039 10.8,15.0365278 10.8,15.6862745 C10.8,16.3360213 11.3372583,16.8627451 12,16.8627451 Z M12,5.09803922 C12.4418278,5.09803922 12.8,5.488205 12.8,5.9694989 L12.8,12.0697168 C12.8,12.5510107 12.4418278,12.9411765 12,12.9411765 C11.5581722,12.9411765 11.2,12.5510107 11.2,12.0697168 L11.2,5.9694989 C11.2,5.488205 11.5581722,5.09803922 12,5.09803922 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Complaint.displayName = 'Complaint';
export default Complaint;
