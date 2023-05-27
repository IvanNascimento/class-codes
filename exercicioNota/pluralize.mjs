'use strict';
export function pluralize(numero, singular, plural_irregular = singular+"s") {
  if(numero == 1) {
    return singular;
  }else{
    return plural_irregular;
  }
}
