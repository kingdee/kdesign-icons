import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ShoppingList = ({
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
          id="626.采购计划"
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
              d="M17.7662338,9.15938475 L19.0129871,10.406138 C19.2467533,10.6399042 19.5584416,10.7957484 19.8701299,10.7957484 C20.1818182,10.7957484 20.4935064,10.6399042 20.7272728,10.406138 C20.961039,10.1723718 21.1168832,9.86068345 21.1168832,9.54899514 C21.1168832,9.49704711 21.082251,9.41046702 21.0591632,9.33543094 L21.038961,9.23730685 L22.6876297,9.23730685 C23.3566779,9.23730685 23.9087929,9.73795667 23.9897748,10.3850562 L24,10.5496771 L24,11.1074367 C23.4805195,12.3022419 22.8831169,12.9256185 22.2077923,12.9775666 C22.2077923,13.5230211 22.051948,14.2243198 21.974026,14.9256185 C21.974026,14.8476964 21.8961039,14.8476964 21.8961039,14.8476964 C21.1948052,14.5360082 20.3376623,14.4580861 19.5584416,14.4580861 C19.2662338,14.4580861 19.0178571,14.4580861 18.7475649,14.4909594 L18.4675325,14.5360082 L18.4675325,14.1463977 C18.4675325,13.6615493 18.1596923,13.2382688 17.7081931,13.040738 L17.5324675,12.9775666 L16.9090909,12.9775666 C16.4242424,13.1160947 16.0625301,13.5008951 15.9881354,13.9677862 L15.9740259,14.1463977 L15.9740259,15.7048393 C15.8181818,15.8606834 15.6623377,15.9386056 15.5064935,16.0944497 C14.961039,16.5619821 14.5714286,17.1853588 14.1818182,17.8866575 C13.948052,18.5879562 13.7142857,19.3671769 13.7142857,20.2243198 C13.7142857,21.0814626 13.8701299,21.8606835 14.1818182,22.5619822 C14.4935065,23.2632809 14.8831169,23.8866574 15.5064935,24.432112 C15.5649351,24.4905537 15.6672079,24.5928264 15.7804384,24.6731834 L15.8961039,24.7438003 L4.96631258,24.7438003 C4.35962184,24.7438003 3.83202047,24.3279195 3.69023647,23.7380289 C3.46066398,22.7822483 3.26954619,21.9227002 3.11688312,21.1593848 C2.72727273,19.1334108 1.94805194,15.2373069 1.71428572,13.1334107 C1.14285714,13.0857917 0.615079356,12.5580139 0.130952378,11.5500774 L0,11.2632809 L0,10.7055213 C0,10.0364732 0.500649825,9.48435814 1.14774936,9.40337623 L1.31237031,9.39315098 L3.11688312,9.39315098 C3.03896105,9.47107307 3.03896105,9.54899514 3.03896105,9.70483929 C3.03896105,10.0165276 3.19480521,10.3282159 3.42857143,10.5619822 C3.66233768,10.7957484 3.97402597,10.9515926 4.28571429,10.9515926 C4.53506494,10.9515926 4.78441559,10.8518523 4.99387012,10.6922679 L5.14285715,10.5619822 L6.38961039,9.15938475 L17.7662338,9.15938475 Z M19.5584416,15.7827614 C20.1818182,15.7827614 20.8051949,15.8606834 21.3506493,16.0944497 C21.8961039,16.328216 22.3636365,16.6399043 22.7532467,17.0295147 C23.1428571,17.419125 23.4545454,17.8866575 23.6883117,18.4321121 C23.922078,18.9775665 24,19.6009432 24,20.2243198 C24,20.8476965 23.922078,21.4710731 23.6883117,22.0165276 C23.4545454,22.5619822 23.1428571,23.0295146 22.7532467,23.419125 C22.3636365,23.8087355 21.8961039,24.1204237 21.3506493,24.35419 C20.8051949,24.5879561 20.1818182,24.6658783 19.5584416,24.6658783 C18.9350649,24.6658783 18.3896104,24.5879561 17.8441559,24.35419 C17.2987014,24.1204237 16.8311688,23.8087355 16.4415585,23.419125 C15.9740259,23.0295146 15.6623377,22.5619822 15.4285714,22.0165276 C15.1948052,21.4710731 15.0389611,20.8476965 15.0389611,20.2243198 C15.0389611,19.6009432 15.1948052,18.9775665 15.4285714,18.4321121 C15.7402598,17.8866575 16.0519481,17.419125 16.4415585,17.0295147 C16.8311688,16.6399043 17.2987014,16.328216 17.8441559,16.0944497 C18.3896104,15.8606834 18.9350649,15.7827614 19.5584416,15.7827614 Z M7.01298702,13.0554887 C6.37012988,13.0554887 5.85822511,13.513822 5.77737195,14.1303895 L5.76623378,14.3022419 L5.76623378,20.9256185 C5.76623378,21.6269172 6.23376623,22.1723718 6.93506496,22.1723718 C7.5779221,22.1723718 8.08982684,21.7140384 8.17068001,21.0974709 L8.1818182,20.9256185 L8.25974026,20.9256185 L8.25974026,14.3022419 C8.25974026,13.6009432 7.71428572,13.0554887 7.01298702,13.0554887 Z M12.3116883,13.0554887 L11.6883117,13.0554887 C11.2034632,13.1940168 10.8417508,13.5788172 10.7673561,14.0457083 L10.7532468,14.2243198 L10.7532468,20.8476965 C10.7532468,21.5489952 11.2987013,22.0944498 12,22.0944498 C12.6428572,22.0944498 13.0892857,21.6361164 13.2192461,21.0195489 L13.2467533,20.8476965 L13.2467533,14.2243198 C13.2467533,13.6788653 12.8571429,13.2113328 12.3116883,13.0554887 Z M19.4805195,17.1853588 C19.090909,17.1853588 18.7792208,17.4970471 18.7792208,17.8866575 L18.7792208,20.2243198 C18.7792208,20.6139302 19.090909,20.9256185 19.4805195,20.9256185 L21.8181819,20.9256185 C22.2077923,20.9256185 22.5194806,20.6139302 22.5194806,20.2243198 C22.5194806,19.8347095 22.2077923,19.5230211 21.8181819,19.5230211 L20.1818182,19.5230211 L20.1818182,17.8866575 C20.1818182,17.4970471 19.8701299,17.1853588 19.4805195,17.1853588 Z M11.5324675,0.233766218 C11.8441559,-0.0779220726 12.3896104,-0.0779220726 12.7012987,0.233766218 L12.7012987,0.233766218 L20.4155845,7.94805197 C20.7272728,8.25974026 20.8051949,8.80519482 20.4935064,9.11688312 C20.1818182,9.42857143 19.6363636,9.42857143 19.3246753,9.11688312 L19.3246753,9.11688312 L12.1558442,1.94805193 L4.98701299,9.11688312 C4.6753247,9.42857143 4.12987013,9.42857143 3.81818182,9.11688312 C3.50649352,8.80519482 3.50649352,8.25974026 3.81818182,7.94805197 L3.81818182,7.94805197 L11.5324675,0.233766218 Z M12.0779221,0.31168831 C11.7662338,0.31168831 11.4545455,0.623376627 11.4545455,0.935064918 C11.4545455,1.24675323 11.7662338,1.55844155 12.0779221,1.55844155 C12.3896104,1.55844155 12.7012987,1.32467533 12.7012987,0.935064918 C12.7012987,0.623376627 12.3896104,0.31168831 12.0779221,0.31168831 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ShoppingList.displayName = 'ShoppingList';
export default ShoppingList;
