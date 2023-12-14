import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProjectTeamManage = ({
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
          id="281.项目团队管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="项目团队管理"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M22.5002255,6.23405021 C23.3276873,6.23405021 24,6.83968657 24,7.58672149 L23.1228423,11.2820273 C22.1775427,10.4810158 20.9621948,9.9992564 19.6363636,9.9992564 C16.6239013,9.9992564 14.1818181,12.4863784 14.1818181,15.5543988 C14.1818181,17.372485 15.0393947,18.9865794 16.3650492,20 L1.12453019,19.9985127 L3.74883488,7.58672149 C3.74883488,6.83968657 4.42235029,6.23405021 5.24860936,6.23405021 L22.5002255,6.23405021 Z M21.6927003,12.3032557 C22.6767109,12.9342095 23.1609045,14.9806594 22.5736228,16.7655949 L23.4545455,17.6580629 L21.6927003,19.4429984 L20.8117776,18.5505306 C19.0499325,19.1455091 17.0906847,18.5505306 16.4071647,17.6580629 C15.7236447,16.7655949 15.5262421,14.9806594 16.4071647,14.0881914 L18.1690099,15.8731272 C18.65553,16.3660234 19.4443349,16.3660234 19.9308551,15.8731272 C20.4173752,15.3802307 20.4173752,14.5810879 19.9308551,14.0881914 L18.1690099,12.3032557 C19.5381228,11.2590817 20.7086896,11.6723021 21.6927003,12.3032557 Z M9.00105237,0 C9.82851416,0 10.7714357,0.681966556 10.7714357,1.52285008 L10.7714357,2.48636245 L18.9919319,2.48636245 C19.8205964,2.48636245 20.4015033,2.97562655 20.4015033,3.81776137 L20.43999,5.01026436 L4.16256579,5.01026436 C3.33390128,5.01026436 2.62310197,5.42695218 2.62310197,6.26908703 L0,18.453139 L0,1.52285008 C0,0.681966556 0.67231272,0 1.49977448,0 L9.00105237,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProjectTeamManage.displayName = 'ProjectTeamManage';
export default ProjectTeamManage;
