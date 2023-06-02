import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProjectTeamTwo = ({
  size = '1em',
  color = 'currentColor',
  rotate = 0,
  spin = false,
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="1260-项目团队"
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
              d="M10.2676537,0 C10.4602223,0 10.6459441,0.0564868052 10.8029089,0.161244153 L10.9148983,0.248734505 L14.0628609,3.10784413 L23.001256,3.10784413 C23.4891411,3.10784413 23.8916259,3.46967184 23.9553187,3.93993555 L23.9640991,4.0706874 L23.9644335,7.85385907 L23.9667738,7.86856919 L23.969086,19.290729 C23.9774981,19.3473243 23.9851197,19.4041218 23.9919435,19.4611013 C24.0314155,19.7976517 23.9246328,20.1378146 23.6982854,20.3994407 C23.50806,20.6156059 23.2474504,20.7552959 22.9661673,20.7958547 L22.7953144,20.8081129 L15.8574938,20.8081129 C15.5131242,20.8081129 15.1854072,20.6594521 14.9567968,20.4020039 C14.7275567,20.1456717 14.6193485,19.8020831 14.6609788,19.462813 C14.7761081,18.5000441 15.1191102,17.5900688 15.6542392,16.8287068 C15.9179763,16.4526525 16.224242,16.1197623 16.5640124,15.8381689 L16.8688001,15.6044799 L16.7443781,15.46537 L16.5832515,15.2536987 L16.4391944,15.0296042 C16.1426374,14.5240743 15.9858729,13.9451908 15.9858729,13.3567759 C15.9858729,12.4654087 16.3342202,11.6249453 16.9643969,10.9947686 C17.5945736,10.3645919 18.435037,10.0162446 19.3264041,10.0162446 C19.5654806,10.0162446 19.8062029,10.0411601 20.0422442,10.0907745 C20.6994684,10.2277603 21.2942773,10.5660702 21.7638664,11.0678862 C22.2292966,11.5654678 22.5288659,12.1799992 22.6287549,12.8438768 C22.7313266,13.5266678 22.6266616,14.2115324 22.3258723,14.8192487 C22.2328215,15.0077992 22.1225738,15.1862801 21.9967446,15.3528271 L21.7831522,15.6044799 L21.8262068,15.6335421 C22.0928276,15.8245656 22.3421207,16.0458966 22.5705013,16.2941766 L22.7917783,16.5513152 L22.998317,16.8256733 C23.4947578,17.5319915 23.82614,18.3674613 23.9634788,19.2537884 L23.9587501,9.08282153 L22.0346469,9.08170891 L22.035738,5.03085611 L13.6884218,5.03085611 C13.4958532,5.03085611 13.3101314,4.97436931 13.1531666,4.86961196 L13.0411772,4.78212158 L9.89321462,1.92568654 L1.92568654,1.92568654 L1.92535222,8.01934777 L1.92301196,8.06113785 L1.92301196,18.6122954 L12.8324328,18.5577984 L12.8324328,20.484512 L0.968192387,20.543331 C0.708759623,20.543331 0.462699676,20.4416976 0.283503838,20.2625017 C0.138007522,20.1191451 0.0438628464,19.9329954 0.0120248289,19.7328096 L0,19.5804877 L0.000334319724,7.93175578 L0.0026745578,7.88996571 L0.0026745578,0.962843271 C0.0026745578,0.474958094 0.364502275,0.0724732695 0.834765979,0.0087805555 L0.965517829,0 L10.2676537,0 Z M19.3250668,11.8175639 C18.4768702,11.8175639 17.7871922,12.507242 17.7871922,13.3554386 C17.7871922,13.826778 18.0025336,14.2603721 18.3751993,14.5518577 L18.5443761,14.6677753 C18.9348728,14.9012469 19.1586343,15.3297389 19.1273488,15.7843669 C19.0984118,16.1804423 18.8799424,16.5299509 18.5460781,16.7294198 L18.3961446,16.8054187 C17.5648603,17.1560553 16.9111385,17.9407251 16.6059868,18.9357142 L16.5880778,19.0005351 L22.0604511,19.0005351 L22.0433389,18.9353291 C21.7690644,18.0325384 21.2047678,17.3027795 20.4783315,16.91335 L20.2556642,16.8068985 C19.8372247,16.6308223 19.5572456,16.239082 19.5238484,15.7816999 C19.4985625,15.3843482 19.6662419,15.0079693 19.9689157,14.764977 L20.106729,14.6693316 C20.6590816,14.3383417 20.939641,13.7458256 20.844995,13.1116937 C20.7524377,12.4981122 20.2659596,11.9776937 19.6721013,11.8539731 C19.555684,11.8296313 19.4393005,11.8175639 19.3250668,11.8175639 Z M9.13627001,4.8035181 C9.78858134,4.8035181 10.3163307,5.234123 10.3163307,5.76636137 C10.3163307,6.29859974 9.78858134,6.72920464 9.13627001,6.72920464 L9.13627001,6.72920464 L4.94049859,6.72920464 C4.28818726,6.72920464 3.76043787,6.29859974 3.76043787,5.76636137 C3.76043787,5.234123 4.28818726,4.8035181 4.94049859,4.8035181 L4.94049859,4.8035181 L9.13627001,4.8035181 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProjectTeamTwo.displayName = 'ProjectTeamTwo';
export default ProjectTeamTwo;