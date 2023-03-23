import {deleteAsync} from 'del'

export default const clean = (dir) => 
   function async cleanDir() {
    return await deleteAsync(dir)
}
