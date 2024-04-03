import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BatchProcessing = ({
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
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="助手式gpt规范故事线"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="出差申请单详情"
            transform="translate(-1844, -942)"
            fill="#666666"
          >
            <g id="编组-2" transform="translate(1520, 828)">
              <g id="能力提示备份" transform="translate(291, 114)">
                <g
                  id="0.全局样式/1.图标/5.基础线性图标/4.业务类/批量处理"
                  transform="translate(34, 1)"
                >
                  <path
                    d="M7,0 C10.8659932,0 14,3.13400675 14,7 C14,10.8659932 10.8659932,14 7,14 C3.13400675,14 0,10.8659932 0,7 C0,3.13400675 3.13400675,0 7,0 Z M7,1 C3.6862915,1 1,3.6862915 1,7 C1,10.3137085 3.6862915,13 7,13 C10.3137085,13 13,10.3137085 13,7 C13,3.6862915 10.3137085,1 7,1 Z M7,3.5 C8.93299662,3.5 10.5,5.06700338 10.5,7 C10.5,8.93299662 8.93299662,10.5 7,10.5 C6.72385763,10.5 6.5,10.2761424 6.5,10 C6.5,9.72385763 6.72385763,9.5 7,9.5 C8.38071187,9.5 9.5,8.38071187 9.5,7 C9.5,5.61928813 8.38071187,4.5 7,4.5 C5.61928813,4.5 4.5,5.61928813 4.5,7 L5.5,7 L4,8.5 L2.5,7 L3.5,7 C3.5,5.06700338 5.06700338,3.5 7,3.5 Z"
                    id="形状结合"
                    fill={fill}
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BatchProcessing.displayName = 'BatchProcessing';
export default BatchProcessing;
