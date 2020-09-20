import _ from 'lodash';
export function Paginate(item,pageNumber,pageSize){
const startIndex=(pageNumber-1) * pageSize;
return _(item).slice(startIndex).take(pageSize).value()
}