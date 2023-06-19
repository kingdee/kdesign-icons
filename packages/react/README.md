# `KDesign Icons For React`

[![NPM version](https://img.shields.io/npm/v/@kdcloudjs/kdesign-icons.svg?style=flat)](https://www.npmjs.com/package/@kdcloudjs/kdesign-icons) [![NPM downloads](https://img.shields.io/npm/dm/@kdcloudjs/kdesign-icons?style=flat)](https://www.npmjs.com/package/@kdcloudjs/kdesign-icons)

KDesign icons是基于金蝶的企业级设计系统Kdesign实现的一套图标组件库，提供超过1400+的SVG图标，按需加载。更多图标请前往KDesign图标资源库。 https://kingdee.design/resource/iconpage

## Install

```bash 
yarn add @kdcloudjs/kdesign-icons
```

## Usage

```ts
import {ArrowRightSolid,ArrowLeftSolid} from '@kdcloudjs/kdesign-icons'

//example
<ArrowRightSolid />
<ArrowLeftSolid size={24} fill="#5582f3" />
```
查找或copy图标组件标签可跳转至iconpage https://kingdee.design/resource/iconpage
## Props

|    prop	 | description  | type  | default | note |
| ---------- | --- | --- | --- | --- |
| size |  图标的大小 | string &#124; number |  '1em' |
| fill |  图标的颜色 | string |  'currentColor' |
| spin |  是否有旋转动画 | boolean | false |
| rotate | 图标旋转角度 | number | 0 |

