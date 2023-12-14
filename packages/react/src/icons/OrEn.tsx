import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OrEn = ({
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
          id="1129-0r"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 10.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M9.26512246,0.210508547 C11.1817805,0.60084234 12.3177207,1.96583449 11.9214158,3.51689443 C11.5993988,4.77777287 11.3572295,6.05363072 11.139617,7.32936482 C10.8097233,9.2639496 9.9222844,10.8726992 7.40282904,11.5239983 C6.5640402,11.7408917 6.15555223,12 4.80000001,12 C3.44444778,12 2.91760231,11.6933534 2.05085899,11.4343689 C0.0796820675,10.8450924 -0.199399396,9.49148957 0.103775441,8.12117418 C0.245864507,7.47792197 0.44849588,6.84321168 0.596917171,6.20057835 L1.22967685,3.30520053 C1.62088512,1.62860988 3.05691137,0.733181936 4.95580817,0.272531165 C6.36326216,-0.0689025646 7.79280175,-0.0894529756 9.26512246,0.210508547 Z M19.1526324,0 C19.1946804,0.317585741 19.2211661,0.517283613 19.2488489,0.726890189 C19.8328808,0.535195458 20.3681312,0.33613272 20.920889,0.182929383 C21.8953229,-0.0870184666 22.8333951,0.0644063805 23.7072732,0.472567568 C23.8691801,0.548152952 24.0167219,0.809335454 23.9984661,0.970923052 C23.9279873,1.59732912 23.8012451,2.22017821 23.6613348,2.83883522 C23.6345498,2.95748523 23.4588764,3.13622247 23.3423094,3.14181199 C22.7141348,3.17179208 22.0829673,3.15591277 21.6675759,3.15591277 C21.475592,2.66543342 21.45584,2.19337398 21.1909832,2.05198485 C20.905626,1.89979776 20.362445,1.98503777 19.9816196,2.09327098 C18.8461766,2.41631917 18.5371769,3.25842946 18.3504303,4.14652616 C18.0635769,5.50960411 17.7825593,6.87369826 17.5022897,8.2377924 C17.383179,8.81732282 17.258382,9.39634502 17.1614174,9.97867021 C17.0412591,10.7008602 17.693675,10.7069579 18.3142182,10.7855921 C18.3142182,11.0936502 18.3674889,11.3559759 18.2955137,11.5907354 C18.2476299,11.7471146 18.023175,11.9790791 17.8741368,11.9811117 C15.9611817,12.0075348 14.0476281,11.9985153 12,11.9985153 C12.131381,11.5424624 12.2386706,11.1693626 12.3401241,10.8172236 C14.1001506,10.5709041 13.7116938,10.5664578 14.0905739,9.09603602 C14.5712067,7.23104566 14.8899329,5.33582117 15.2665683,3.45190268 C15.3497664,3.03611947 15.4479281,2.60903018 15.4120152,2.19502543 C15.3940589,1.9888488 15.1042125,1.64611027 14.9104331,1.63200949 C14.2345244,1.58297426 14.0609457,1.38734146 14.3624637,0.866754946 C14.4456617,0.723206201 14.435636,0.540657936 14.4766364,0.334354262 C16.0357008,0.222818148 17.5851885,0.11204424 19.1526324,0 Z M6.47319033,1.75600552 C5.62049771,1.89701111 4.73787486,2.69529662 4.59061182,3.39360995 C4.44557766,4.08135411 4.22396675,4.75915082 4.07224602,5.44614888 C3.79953087,6.68137756 3.55388023,7.9203366 3.27272729,9.27406473 C3.33163248,9.46729458 3.35599058,9.78586277 3.52379083,10.0486007 C3.86862508,10.5882516 4.49445306,10.7724044 5.24254918,10.6987931 C6.11052531,10.6134933 6.86371592,10.2635906 7.09981435,9.63814261 C7.52791191,8.5040052 7.76974167,7.32622323 8.06888457,6.16361102 C8.2761672,5.35811356 8.40416663,4.53881402 8.64870283,3.74077712 C9.0096166,2.56262208 8.10024761,1.4869261 6.47319033,1.75600552 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OrEn.displayName = 'OrEn';
export default OrEn;
