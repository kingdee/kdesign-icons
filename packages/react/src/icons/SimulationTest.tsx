import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SimulationTest = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
        width={size}
        height={size}
      >
        <path
          d="M862.5 125C903.921869 125 937.5 158.028012 937.5 198.770492L937.5 782.786888C937.5 833.714781 895.526694 875 843.75 875L93.75 875C41.973305 875 0 833.714781 0 782.786888L0 198.770492C0 158.028163 33.578633 125 75 125L862.5 125zM875 358.5625L62.5 358.5625L62.5 782.786888C62.5 799.76285 76.491102 813.524588 93.75 813.524588L843.75 813.524588C861.0089 813.524588 875 799.76285 875 782.786888L875 358.5625zM490.598484 447.740573L496.21517 448.241704C513.195681 451.278457 524.4583 467.279993 521.370935 483.982134L477.620935 720.662463C474.533569 737.364606 458.265341 748.442588 441.28483 745.405838C424.304319 742.369081 413.0417 726.36755 416.129065 709.665406L459.879065 472.985079C462.280349 459.994524 472.655243 450.406236 485.137182 448.215099L490.598484 447.740573zM641.880763 454.870248L773.130763 562.452215C787.247581 574.023378 788.215869 595.019646 775.222088 607.800413L643.972088 736.898775C631.7682 748.902594 611.981798 748.902594 599.777913 736.898775C587.574029 724.894956 587.574029 705.432912 599.777913 693.429094L706.8125 588.155738L601.869237 502.096966C590.083768 492.436745 587.358863 476.049126 594.658808 463.367374L597.868085 458.805808C608.916963 445.764509 628.622113 444.002499 641.880763 454.870248zM339.631915 458.803656C350.680793 471.844954 348.889416 491.227066 335.630763 502.094814L230.6875 588.153586L337.722087 693.426944C348.569984 704.097006 349.775306 720.659981 341.338053 732.639581L337.722087 736.896625C325.518203 748.900444 305.731798 748.900444 293.527913 736.896625L162.277913 607.798262C149.284133 595.017494 150.252419 574.021226 164.369238 562.450063L295.619238 454.868096C308.877891 444.000348 328.583038 445.762358 339.631915 458.803656zM843.75 186.47541L93.75 186.47541C76.491102 186.47541 62.5 200.237149 62.5 217.213115L62.5 297.069672L875 297.069672L875 217.213115C875 200.237149 861.0089 186.47541 843.75 186.47541z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
SimulationTest.displayName = 'SimulationTest';
export default SimulationTest;