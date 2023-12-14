import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InheritanceTree = ({
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
          id="1133-继承树"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M24,20.6153847 C24,22.4846561 22.4846561,24 20.6153846,24 C18.7461132,24 17.2307692,22.4846561 17.2307692,20.6153847 C17.2307692,19.0668478 18.2707121,17.7612028 19.6903069,17.3587404 L19.6929231,11.6916923 L12.9230769,11.6916923 L12.9232282,17.3582166 C14.3437692,17.760069 15.3846154,19.0661754 15.3846154,20.6153847 C15.3846154,22.4846561 13.8692714,24 12,24 C10.1307285,24 8.61538463,22.4846561 8.61538463,20.6153847 C8.61538463,19.0668478 9.65532752,17.7612028 11.0749223,17.3587404 L11.0769231,11.6916923 L4.30892308,11.6916923 L4.30969312,17.3587404 C5.72928786,17.7612028 6.76923078,19.0668478 6.76923078,20.6153847 C6.76923078,22.4846561 5.25388688,24 3.38461532,24 C1.51534393,24 0,22.4846561 0,20.6153847 C0,19.0661754 1.04084621,17.760069 2.46138719,17.3582166 L2.46153839,10.7692308 C2.46153839,10.316074 2.78807722,9.93918454 3.21869113,9.86102586 L3.38461532,9.84615384 L11.0769231,9.84553846 L11.0749223,6.64125962 C9.65532752,6.23879722 8.61538463,4.93315212 8.61538463,3.38461537 C8.61538463,1.51534393 10.1307285,0 12,0 C13.8692715,0 15.3846154,1.51534393 15.3846154,3.38461537 C15.3846154,4.93382453 14.3437692,6.23993103 12.9232282,6.64178336 L12.9230769,9.84553846 L20.6153846,9.84615384 C21.0685413,9.84615384 21.4454308,10.1726926 21.5235895,10.6033065 L21.5384615,10.7692308 L21.5386128,17.3582166 C22.9591538,17.760069 24,19.0661754 24,20.6153847 Z M4.92307699,20.6153847 C4.92307699,19.7657158 4.23428417,19.076923 3.38461532,19.076923 C2.53494646,19.076923 1.84615385,19.7657158 1.84615385,20.6153847 C1.84615385,21.4650535 2.53494646,22.1538462 3.38461532,22.1538462 C4.23428417,22.1538462 4.92307699,21.4650535 4.92307699,20.6153847 Z M13.5384615,3.38461537 C13.5384615,2.53494655 12.8496689,1.84615385 12,1.84615385 C11.1503311,1.84615385 10.4615385,2.53494655 10.4615385,3.38461537 C10.4615385,4.23428423 11.1503311,4.92307693 12,4.92307693 C12.8496689,4.92307693 13.5384615,4.23428423 13.5384615,3.38461537 Z M13.5384615,20.6153847 C13.5384615,19.7657158 12.8496689,19.076923 12,19.076923 C11.1503311,19.076923 10.4615385,19.7657158 10.4615385,20.6153847 C10.4615385,21.4650535 11.1503311,22.1538462 12,22.1538462 C12.8496689,22.1538462 13.5384615,21.4650535 13.5384615,20.6153847 Z M22.1538462,20.6153847 C22.1538462,19.7657158 21.4650534,19.076923 20.6153846,19.076923 C19.7657158,19.076923 19.0769231,19.7657158 19.0769231,20.6153847 C19.0769231,21.4650535 19.7657158,22.1538462 20.6153846,22.1538462 C21.4650534,22.1538462 22.1538462,21.4650535 22.1538462,20.6153847 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InheritanceTree.displayName = 'InheritanceTree';
export default InheritanceTree;
