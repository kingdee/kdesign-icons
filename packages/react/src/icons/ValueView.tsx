import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ValueView = ({
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
          d="M912.500625 62.5C929.76 62.5 943.750625 76.49125 943.750625 93.75L943.750625 906.25C943.750625 923.509375 929.76 937.5 912.500625 937.5L100.000625 937.5C82.741875 937.5 68.750625 923.509375 68.750625 906.25L68.750625 93.75C68.750625 76.49125 82.741875 62.5 100.000625 62.5L912.500625 62.5zM881.250625 125L131.250625 125L131.250625 875L881.250625 875L881.250625 125zM287.500625 343.75L287.500625 671.875L225.000625 671.875L225.000625 343.75L287.500625 343.75zM707.500625 340.0625C735.15375 340.0625 757.575625 348.15 774.494375 364.365625C791.46625 380.628125 799.938125 402.69375 799.938125 430.25C799.938125 454.25 793.656875 473.303125 781.075625 487.140625L777.113125 491.134375L774.969375 492.9375L777.388125 494.334375C796.20375 506.1875 806.85375 526.315625 809.36 554.284375L809.794375 560.878125L809.938125 567.75C809.938125 598.340625 800.01625 623.0125 780.19125 641.434375C760.45375 659.775 735.056875 668.9375 704.250625 668.9375C675.406875 668.9375 650.594375 659.328125 630.05375 640.178125C611.15375 622.559375 600.863125 601 599.27875 575.734375L599.16625 572.0625C599.100625 569.95 599.91 567.903125 601.406875 566.40625C602.906875 564.90625 604.944375 564.0625 607.06625 564.0625L652.006875 564.0625C654.088125 564.0625 656.088125 564.865625 657.59125 566.309375C659.094375 567.75 659.981875 569.715625 660.06625 571.79375L660.1475 573.740625C661.113125 584.99375 665.41625 594.51875 673.119375 602.490625C681.888125 611.5625 692.91625 616.0625 706.500625 616.0625C719.931875 616.0625 730.41625 611.190625 738.344375 601.315625C746.49125 591.171875 750.563125 578.878125 750.563125 564.25C750.563125 552.403125 746.231875 541.38125 737.431875 531.0375C728.775625 520.865625 719.29125 515.9375 708.750625 515.9375L707.775625 515.98125L705.175625 516.41875L697.6225 517.10625C695.425625 517.303125 693.2475 516.571875 691.619375 515.084375C689.99125 513.596875 689.063125 511.49375 689.063125 509.2875L689.063125 481.565625C689.063125 479.44375 689.906875 477.40625 691.406875 475.90625C692.906875 474.40625 694.944375 473.5625 697.06625 473.565625L700.044375 473.565625L704.4975 473.375C714.1225 472.50625 722.488125 468.61875 729.7475 461.625C737.99125 453.68125 742.063125 443.984375 742.063125 432.25C742.063125 403.734375 730.125625 390.4375 705.000625 390.4375C681.444375 390.4375 669.481875 402.121875 668.07875 427.08125C667.988125 430.4 666.62875 433.559375 664.281875 435.90625L663.250625 436.9375L609.431875 436.9375L611.125625 423.596875C614.906875 399.340625 624.531875 379.709375 640.006875 364.865625C657.25375 348.325 679.84125 340.0625 707.500625 340.0625zM453.500625 340.0625C482.385 340.0625 506.90375 349.9 526.79125 369.5C546.6975 389.121875 556.688125 413.7375 556.688125 443.065625C556.688125 469.36875 538.2975 504.378125 501.706875 548.571875L495.063125 556.465625L450.156875 608.90625L554.000625 608.921875C557.000625 611.925 558.688125 615.99375 558.688125 620.240625L558.688125 650.621875C558.688125 654.015625 557.61 657.3 555.64125 660.015625L554.000625 661.9375L340.344375 661.9375L423.350625 556.49375L445.4475 528.83125L463.100625 506.175L473.41 492.484375L481.20375 481.634375L486.4725 473.640625C486.919375 472.9125 487.31625 472.234375 487.66625 471.6125C493.806875 460.715625 496.813125 451.975 496.875625 444.803125C497.16625 443.05 497.313125 441.3 497.313125 439.553125C497.313125 427.296875 493.2975 416.503125 485.181875 406.978125C477.25375 397.675 466.981875 393.078125 454.000625 393.078125C441.1975 393.078125 431.385 398.18125 424.094375 408.628125C417.588125 417.95625 413.85375 429.040625 412.9225 441.965625L412.80375 445.26875C412.72875 447.4 411.850625 449.41875 410.344375 450.925C408.844375 452.428125 406.806875 453.26875 404.685 453.26875L360.62875 453.26875C357.235 453.26875 353.950625 452.190625 351.235 450.221875L349.313125 448.58125C349.313125 417.35625 358.635 391.39375 377.285 370.9375C396.0475 350.35625 421.56625 340.0625 453.500625 340.0625z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
ValueView.displayName = 'ValueView';
export default ValueView;
