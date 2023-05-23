
import { parallel, series } from "gulp";
import {generateVueIcon,generateVueIconEntry} from './tasks/generate-vue'
import {generateReactIcon,generateReactIconEntry} from './tasks/generate-react'

export default series(
    parallel(
        generateVueIcon(),
        generateReactIcon()
    ),
    generateVueIconEntry,
    generateReactIconEntry
)
