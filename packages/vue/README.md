# `Kdesign Icons For Vue`


## Install

```bash 
yarn add @kdcloudjs/kdesign-icons-vue
```

## Usage

``` js
import {ArrowRightSolid,ArrowLeftSolid} from '@kdcloudjs/kdesign-icons-vue'

//example
<arrow-right-solid />
<arrow-left-solid :size="24" color="#5582f3" />
```
## Props

|    prop	 | description  | type  | default | note |
| ---------- | --- | --- | --- | --- |
| size |  图标的大小 | number &#124; string |  '1em' |
| color |  图标的颜色 | string  &#124; string[] |  'currentColor' |
| spin |  Rotate icon with animation | boolean | false |
| rotate | 图标旋转角度 | number | 0 |

