import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FlowchartThree = ({
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
          id="流程图3"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <g
            id="流程图_t6wbn2"
            transform="translate(2.000000, 5.000000)"
            fill="#333333"
            fillRule="nonzero"
          >
            <path
              d="M27.4128275,15.2417165 L22.6716398,12.3807713 C22.552719,12.2620858 22.4212801,12.1621401 22.2835823,12.077811 L22.2835823,10.9752852 L22.2835823,10.9752852 C22.2679348,10.4380771 21.8266757,10.0070614 21.2821433,10.0070614 L15.0043726,10.0070614 L15.0043726,7.9675448 L20.1398769,7.9675448 C21.2445892,7.9675448 22.1427548,7.07115696 22.1427548,5.96863117 L22.1427548,1.99891363 C22.1427548,0.89638784 21.2445892,0 20.1398769,0 L8.06001909,0 C6.95530671,0 6.05714111,0.89638784 6.05714111,1.99891363 L6.05714111,5.96863117 C6.05714111,7.07115696 6.95530671,7.9675448 8.06001909,7.9675448 L13.0014946,7.9675448 L13.0014946,10.0070614 L6.71433544,10.0070614 C6.1729325,10.0070614 5.73167346,10.4380771 5.71289647,10.9752852 L5.71289647,10.9752852 L5.71289647,12.0528245 C5.55642162,12.140277 5.41246479,12.2495926 5.2778964,12.3807713 L0.586780656,15.1886204 C-0.195593552,15.9694459 -0.195593552,17.2343834 0.586780656,18.0152091 L5.33109784,20.8761542 C5.54390363,21.0885389 5.79739288,21.244704 6.06340011,21.3415264 C5.90692527,21.5164313 5.81304037,21.7475557 5.81304037,22.0005431 C5.81304037,22.5533678 6.26055842,23 6.81447935,23 L21.3822872,23 C21.9362081,23 22.3837261,22.5533678 22.3837261,22.0005431 C22.3837261,21.7256926 22.2741937,21.4789516 22.0958125,21.2978001 C22.3242657,21.2009778 22.5370714,21.0604291 22.7248413,20.873031 L27.4159571,18.0651819 C28.1952018,17.2874797 28.1952018,16.0225421 27.4128275,15.2417165 Z M8.06001909,2.03014666 L20.1398769,2.03014666 L20.1398769,5.99986419 L8.06001909,5.99986419 L8.06001909,2.03014666 Z M15.1483294,18.0152091 L19.8926467,20.8761542 C19.9364596,20.9198805 19.9834021,20.9636067 20.033474,21.0010864 L8.02246514,21.0010864 C8.0694076,20.9604835 8.11635004,20.9198805 8.1632925,20.8761542 L12.8544082,18.0683053 C13.6367825,17.2874797 13.6367825,16.0225421 12.8544082,15.2417165 L8.11009106,12.3807713 C7.98804066,12.2589626 7.85660181,12.1590169 7.71577445,12.0746876 L7.71577445,12.005975 L20.2807042,12.005975 L20.2807042,12.0497013 C20.1210999,12.1371538 19.9740135,12.2495926 19.8394452,12.3807713 L15.1483294,15.1886204 C14.3659552,15.9694459 14.3659552,17.2343834 15.1483294,18.0152091 Z M1.97940674,16.6253395 L6.67365199,13.8174905 L11.4179692,16.6753124 L6.72685346,19.4831614 L1.97940674,16.6253395 Z M21.2852728,19.4831614 L16.5409556,16.6253395 L21.2320714,13.8174905 L25.9763885,16.6753124 L21.2852728,19.4831614 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FlowchartThree.displayName = 'FlowchartThree';
export default FlowchartThree;