import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PersonnelFileManagement = ({
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
          id="476.人员档案管理"
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
              d="M9.4446966,0 C9.71718224,0 9.95682276,0.180210487 10.0324483,0.441991241 L11.1428571,4.28571429 L23.3882139,4.28571429 C23.726094,4.28571429 24,4.55962028 24,4.89750043 L24,19.9590171 C24,20.2972426 23.7258141,20.5714286 23.3875886,20.5714286 L0.611786139,20.5714286 C0.273905993,20.5714286 0,20.2975226 0,19.9596424 L0,0.611786139 C0,0.273905993 0.273905993,0 0.611786139,0 L9.4446966,0 Z M9.33448287,12.630766 C8.81353029,12.9854541 8.29433401,13.1975877 7.64391163,13.1975877 C6.99468944,13.1975877 6.474615,12.9854541 5.95538946,12.7003015 C4.65608152,13.3407861 3.74680745,14.761953 3.74680745,16.3952098 L3.74680745,16.3952098 L11.5436796,16.3952098 C11.4293068,14.6279462 10.692908,13.3731316 9.33448287,12.630766 Z M20.0986425,15.1331971 L14.5094131,15.1331971 C14.1623261,15.1331971 13.8809566,15.4145666 13.8809566,15.7616535 C13.8809566,16.1087405 14.1623261,16.3901101 14.5094131,16.3901101 L14.5094131,16.3901101 L20.0986425,16.3901101 C20.4457295,16.3901101 20.7270991,16.1087405 20.7270991,15.7616535 C20.7270991,15.4145666 20.4457295,15.1331971 20.0986425,15.1331971 L20.0986425,15.1331971 Z M20.1424957,11.5587052 L14.5258785,11.5587052 C14.1787916,11.5587052 13.897422,11.8400748 13.897422,12.1871618 C13.897422,12.5342487 14.1787916,12.8156183 14.5258785,12.8156183 L14.5258785,12.8156183 L20.1424957,12.8156183 C20.4895826,12.8156183 20.7709522,12.5342487 20.7709522,12.1871618 C20.7709522,11.8400748 20.4895826,11.5587052 20.1424957,11.5587052 L20.1424957,11.5587052 Z M7.58548493,7.49361488 C6.13769505,7.49361488 4.95992418,8.65737918 4.94181951,10.1051397 C4.92983265,11.058512 5.43066078,11.9441197 6.25400709,12.4247648 C7.07621176,12.9048245 8.09358712,12.9048245 8.91693342,12.4247648 C9.73913812,11.9441343 10.2405224,11.0585265 10.227672,10.1051397 C10.2101234,8.65739383 9.0323526,7.49361488 7.58548493,7.49361488 Z M20.0986425,7.85180366 L14.467792,7.85180366 C14.1207051,7.85180366 13.8393356,8.13317324 13.8393356,8.4802602 C13.8393356,8.82734718 14.1207051,9.10871665 14.467792,9.10871665 L14.467792,9.10871665 L20.0986425,9.10871665 C20.4457295,9.10871665 20.7270991,8.82734718 20.7270991,8.4802602 C20.7270991,8.13317324 20.4457295,7.85180366 20.0986425,7.85180366 L20.0986425,7.85180366 Z M20.8665566,1.77861452 C21.2044367,1.77861452 21.4783427,2.05252051 21.4783427,2.39040066 L21.4768288,2.4334122 L21.4247933,3.17172228 L12.2500904,3.17172228 L11.8253259,1.77861452 L20.8665566,1.77861452 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PersonnelFileManagement.displayName = 'PersonnelFileManagement';
export default PersonnelFileManagement;
