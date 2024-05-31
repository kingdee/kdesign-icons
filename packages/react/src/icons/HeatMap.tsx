import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const HeatMap = ({
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
          id="热力图"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <path
            d="M17.467166,2.84201132 C20.6554866,1.16106669 23.2696487,2.08096854 24.810105,4.76811539 C25.8729411,6.62210937 26.3241235,9.30952919 25.9223582,10.7391091 L25.865097,10.9182709 L25.7934547,11.1190975 L25.7025411,11.3977751 C25.2881948,12.775485 25.4910543,13.9383029 26.9358682,15.7985179 L27.2415755,16.1801298 C27.3491212,16.3106136 27.4623717,16.4444671 27.5815123,16.5819609 L27.9567891,17.0056329 L28.3685168,17.4527676 L28.8178058,17.9249871 C28.8958792,18.0058708 28.9755638,18.0878673 29.056883,18.1710103 C31.4721415,20.6398068 31.5536515,24.1677613 29.7972287,27.2270599 C28.1755969,30.0515824 25.3987136,31.6996441 23.1194322,30.7188848 L22.9357487,30.6335744 C21.592759,29.9648085 19.8041797,29.703311 17.1784899,29.6932723 L16.3192536,29.6978844 L13.4826144,29.7612792 L12.4747713,29.7730786 L11.845602,29.7691464 L11.2955264,29.7530587 L10.9596315,29.7350475 L10.482344,29.6963018 L10.1860095,29.664055 L10.0369745,29.6455845 C6.3467962,29.1720576 3.59030537,26.210201 2.02052051,21.9718976 C-0.901713164,14.0764677 2.83304012,9.80291567 9.18751397,9.9654392 L9.43969993,9.97416051 C10.6364332,10.0275227 11.1114054,9.76304031 11.7498359,8.77549688 L11.9621779,8.42746725 L12.6048336,7.35594215 L12.8048271,7.03438905 L12.8572922,6.95310097 C13.3441668,6.2105068 13.8623783,5.56571728 14.5000264,4.94956669 C15.2210837,4.25281903 16.0691795,3.62271264 17.0802886,3.05288398 L17.467166,2.84201132 Z M23.0749955,5.76279877 C22.0472877,3.97008201 20.5891537,3.45697684 18.3999106,4.61118841 C17.3814452,5.1481432 16.5636026,5.73671891 15.8897877,6.38781689 C15.3665512,6.89341311 14.9399445,7.42422252 14.5298557,8.04970088 L14.3529685,8.33089903 L13.56023,9.65394847 C12.5545341,11.2847441 11.5035211,12.0057592 9.59480824,11.9793989 L9.35169318,11.972223 C4.17390199,11.7469773 1.47362723,14.7323381 3.89609228,21.2774694 C5.23415099,24.8901292 7.47764573,27.3007702 10.2918841,27.6618958 C10.4339561,27.6801783 10.5748949,27.6959865 10.719077,27.7094749 L11.1657304,27.7431349 C11.2432531,27.7476365 11.3226809,27.7515967 11.4045607,27.7550348 L11.9296412,27.7695538 L12.2224561,27.7724044 L12.8299937,27.7704366 L14.0846677,27.7480447 L16.1345009,27.7003504 L16.7674491,27.6936625 C19.9050198,27.6766251 22.0609767,27.9637125 23.828189,28.8437282 C24.9718694,29.4147199 26.858486,28.3288376 28.0627614,26.2312571 C29.4086861,23.886955 29.3496143,21.3301776 27.6271633,19.5695458 C27.4500109,19.3884201 27.2793043,19.2109667 27.1149072,19.0369689 L26.6405083,18.5251255 C23.6022244,15.1790591 23.0332897,13.1285589 23.8443525,10.6401706 L23.9077527,10.4526934 L23.9828978,10.242028 C24.2624069,9.46973731 23.9121952,7.22319639 23.0749955,5.76279877 Z M22.0027299,8.50489792 L22.0304206,8.62948544 L22.0765081,8.87860881 L22.1104717,9.13386008 C22.1151399,9.17732574 22.1193163,9.22135657 22.1230077,9.26610749 L22.1393891,9.54449347 C22.1429452,9.64099541 22.1446147,9.74161708 22.1444513,9.84759784 L22.1385161,10.1828568 L22.1219053,10.5577065 L22.0949408,10.9795831 L22.0112378,11.9941619 L21.9343287,12.8412766 L21.9026166,13.2229074 C21.84678,13.9360007 21.8269469,14.4836729 21.8465766,14.958726 C21.8872277,15.9256822 22.4684073,16.8368118 23.772271,18.1490937 L24.2628147,18.6304122 L24.9059536,19.2541092 C25.2605477,19.602714 25.5253798,19.8795161 25.7561746,20.1501206 C26.4138515,20.9212397 26.7659782,21.6153191 26.7469076,22.3889543 C26.6765518,25.1134245 22.3184335,25.8815185 19.434074,24.8397947 C17.1172925,24.0011052 16.3076229,21.3104934 17.0717525,18.732506 C17.2053573,18.281581 17.1477314,17.6708419 16.8968216,16.9137493 C16.7087127,16.3461516 16.4276888,15.7343379 16.0351486,15.0034411 L15.1937835,13.4909367 C14.0810886,11.4280713 16.2200341,7.57130489 18.6951332,6.78520765 L18.8679939,6.73549184 C20.5120306,6.31176311 21.6528502,7.00945874 22.0027299,8.50489792 Z M15.5098367,17.6120226 C15.7600337,19.2587378 15.2629927,21.169837 14.1845939,22.1130418 C12.1427722,23.8990717 9.67964444,24.5995379 7.30955087,23.8289644 C4.41864407,22.888588 2.80368575,18.5699135 5.06769436,16.6199007 C6.84780888,15.0851041 8.02328414,14.8203649 9.59232466,15.2666693 L9.899592,15.3606028 C10.686924,15.6101234 11.0300336,15.6406114 11.6275039,15.3857688 L11.7825749,15.3160754 C13.7375862,14.3976991 15.2006003,15.5767292 15.5098367,17.6120226 Z M19.3671548,8.67219997 C17.9888902,9.02692956 16.4856805,11.6731561 16.9532766,12.5400522 L17.7471161,13.9649426 L17.7971158,14.0571475 C18.2395168,14.8808836 18.5647079,15.5888531 18.7952794,16.284577 C19.16323,17.3948272 19.2576233,18.3952386 18.9893217,19.3007738 C18.4928331,20.9758056 18.9643614,22.5427404 20.1141505,22.9589717 C21.908253,23.6069348 24.7276199,23.1100371 24.7475445,22.338497 L24.7455219,22.264708 C24.7444728,22.2524236 24.743033,22.240105 24.7411504,22.2276904 L24.7241254,22.15156 L24.6939756,22.0701707 C24.6877181,22.0560033 24.6808097,22.0414934 24.6731982,22.0265795 L24.6186765,21.9317551 C24.6080447,21.9149787 24.5966058,21.897675 24.5843077,21.8797824 L24.4997926,21.7648667 L24.3921586,21.632859 L24.2589073,21.4808009 L24.0055324,21.2086481 L23.554719,20.7479908 L22.5957977,19.7993889 C20.7901435,18.0282372 19.9194744,16.7347485 19.8483117,15.0420156 C19.8314899,14.6349202 19.8381321,14.2024701 19.8658593,13.7005448 L19.9091005,13.0620626 L20.0601486,11.3420917 L20.1073595,10.7137336 L20.1342399,10.1994041 L20.1407572,9.90982618 L20.1380763,9.65586652 L20.1261323,9.43150061 L20.1048602,9.23070395 L20.0741951,9.04745209 L20.0553199,8.9605228 C19.9737426,8.61184905 19.9330389,8.54427243 19.5745448,8.62190943 L19.3671548,8.67219997 Z M12.6309357,17.1078006 C11.470825,17.6527683 10.6838809,17.6582708 9.52939093,17.3206884 L9.18826692,17.2154077 C8.1637996,16.8930437 7.68882501,16.9805085 6.3712979,18.1164668 C5.44096389,18.9177727 6.37007286,21.4023688 7.92607862,21.9085183 C9.56549711,22.4415321 11.3179189,21.943177 12.8658601,20.5891561 C13.3670769,20.1507746 13.686703,18.9218275 13.5305312,17.8939558 C13.4069633,17.0806717 13.2032091,16.8744856 12.7240525,17.067069 L12.6309357,17.1078006 Z"
            id="形状"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
HeatMap.displayName = 'HeatMap';
export default HeatMap;