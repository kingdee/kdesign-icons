import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const IconTwo = ({
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
          d="M655.264931 102.902913L940.598619 388.236599L941.476531 389.150629C942.159463 389.890957 942.807056 390.664368 943.41665 391.468188L940.598619 388.236599C942.204394 389.842373 943.598881 391.579423 944.782081 393.413204C945.366288 394.325388 945.895069 395.245525 946.376913 396.193531C946.703806 396.832338 947.016381 397.506159 947.303669 398.188106C947.6862 399.095723 948.022744 400.010913 948.316606 400.945023C948.606494 401.874251 948.855031 402.819286 949.058675 403.771995C949.203606 404.435497 949.326925 405.122207 949.427425 405.816303C949.585463 406.924997 949.685175 408.016983 949.727744 409.110779C949.743 409.483386 949.751531 409.90754 949.751531 410.333686L949.725244 411.619278C949.681638 412.684895 949.583794 413.748706 949.431713 414.806217L949.751531 410.333686C949.751531 412.593779 949.511606 414.797835 949.055831 416.921773C948.842987 417.901845 948.582238 418.883867 948.272969 419.853773C948.003663 420.699383 947.711888 421.494364 947.389519 422.273471C947.046213 423.108452 946.644469 423.971543 946.201219 424.818573C945.7957 425.586603 945.375325 426.31384 944.927281 427.021831C944.46345 427.760851 943.953125 428.496758 943.407619 429.214467C942.756519 430.068325 942.067831 430.884853 941.339738 431.664088C941.104225 431.916498 940.854094 432.175297 940.598619 432.430773L939.831931 433.171889C939.015594 433.934657 938.158325 434.654169 937.263775 435.326774L940.598619 432.430773C938.992844 434.036547 937.255794 435.431035 935.422013 436.614237C934.600906 437.141933 933.726175 437.649525 932.825938 438.114644C932.013875 438.534562 931.219325 438.901344 930.413725 439.233026C929.6281 439.558157 928.797588 439.861304 927.951481 440.129409C927.052288 440.411392 926.154775 440.651118 925.250125 440.850281C924.403138 441.040098 923.523912 441.19533 922.63285 441.313018C921.719169 441.431748 920.816538 441.511406 919.912481 441.552014C919.447119 441.573131 918.975556 441.583686 918.501531 441.583686L62.5 441.583686C45.241102 441.583686 31.25 427.592584 31.25 410.333686C31.25 393.074787 45.241102 379.083686 62.5 379.083686L843.0625 379.0625L611.070759 147.097087C598.866876 134.893203 598.866876 115.106798 611.070759 102.902913C623.274644 90.699029 643.06105 90.699029 655.264931 102.902913zM937.5 616.861757C954.7589 616.861757 968.75 630.852856 968.75 648.111756C968.75 665.370656 954.7589 679.361756 937.5 679.361756L156.875 679.3125L388.92967 911.348306C401.133579 923.552169 401.133621 943.338575 388.929762 955.542481C376.725903 967.746394 356.939497 967.746431 344.735588 955.542575L59.400714 670.208888L58.464046 669.230475C57.889936 668.604631 57.340999 667.955319 56.81884 667.284138L59.400714 670.208888C57.727739 668.535925 56.284104 666.720463 55.069807 664.801575C54.58063 664.023544 54.114886 663.210112 53.685666 662.374825C53.330527 661.688463 52.998988 660.977456 52.695642 660.257394C52.313565 659.349719 51.977018 658.434531 51.683157 657.500419C51.39281 656.571256 51.144271 655.626219 50.940623 654.673513C50.796153 654.009944 50.67284 653.323238 50.57234 652.629138C50.413831 651.520513 50.314119 650.428525 50.271546 649.334731C50.25676 648.962056 50.24823 648.5379 50.24823 648.111756L50.274043 646.826231C50.317645 645.760613 50.415486 644.6968 50.567567 643.639288L50.24823 648.111756C50.24823 645.851663 50.488157 643.647606 50.94393 641.523669C51.156281 640.543663 51.417031 639.561638 51.726297 638.591731C51.996102 637.746063 52.287873 636.951081 52.610245 636.171969C52.953045 635.33705 53.354788 634.473956 53.798035 633.626925C54.204064 632.858838 54.624439 632.1316 55.072481 631.423613C55.535803 630.684644 56.046125 629.948738 56.591628 629.231025C57.243246 628.377119 57.93193 627.560588 58.660027 626.781356C58.895019 626.528994 59.145146 626.270194 59.400622 626.014719L60.167828 625.273556C60.947062 624.545457 61.76359 623.856773 62.614235 623.210678L59.400622 626.014719C61.113444 624.301886 62.97563 622.829453 64.945253 621.597417C65.470849 621.271926 66.012784 620.954906 66.564795 620.654047C67.670261 620.049667 68.800597 619.521244 69.952631 619.064016C70.634157 618.792486 71.33569 618.541832 72.048282 618.316033C72.845129 618.066223 73.638662 617.849876 74.438048 617.665319C75.442325 617.429844 76.489956 617.242287 77.554253 617.108257C78.406702 617.002717 79.246104 616.931192 80.086739 616.893431C80.552641 616.872311 81.024203 616.861757 81.49823 616.861757L937.5 616.861757z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
IconTwo.displayName = 'IconTwo';
export default IconTwo;