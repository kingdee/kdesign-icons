# `KDesign Icons For Vue`

[![NPM version](https://img.shields.io/npm/v/@kdcloudjs/kdesign-icons-vue.svg?style=flat)](https://www.npmjs.com/package/@kdcloudjs/kdesign-icons-vue) [![NPM downloads](https://img.shields.io/npm/dm/@kdcloudjs/kdesign-icons-vue?style=flat)](https://www.npmjs.com/package/@kdcloudjs/kdesign-icons-vue)

KDesign icons是基于金蝶的企业级设计系统Kdesign实现的一套图标组件库，提供超过1400+的图标组件，更多图标请前往金蝶图标资源库。 https://kingdee.design/resource/iconpage

## Install

```bash 
yarn add @kdcloudjs/kdesign-icons-vue
```

## Usage

``` js
import {ArrowRightSolid,ArrowLeftSolid} from '@kdcloudjs/kdesign-icons-vue'

//example
<arrow-right-solid />
<arrow-left-solid size="24" color="#5582f3" />
```
## Props

|    prop	 | description  | type  | default | note |
| ---------- | --- | --- | --- | --- |
| size |  图标的大小 | number &#124; string |  '1em' |
| color |  图标的颜色 | string  &#124; string[] |  'currentColor' |
| spin |  Rotate icon with animation | boolean | false |
| rotate | 图标旋转角度 | number | 0 |

