'use strict';
export function toObject(csv, ...names) {
  let obj = {}
  csv = csv.split(",");
  for(let i in names) {
    obj[names[i]] = csv[i];
  }
  return obj;
}
