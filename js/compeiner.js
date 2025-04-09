function notin(j, anyarr) {
  for (var i = 0; i < anyarr.length; i++) {
    if (anyarr[i] == j) {
      return false;
    }
  }
  return true;
}

function notinOBJ(ily, anyobj) {
  let anyarr = Object.keys(anyobj);
  for (var i = 0; i < anyarr.length; i++) {
    if (anyobj[anyarr[i]] == ily) {
      return false;
    }
  }
  return true;
}

function twoCompiener(nam_ary, val_ary) {
  let  ind_ary = new Array(), skip_ary = new Array();
  for (var i = 0; i < val_ary.length; i++) {
    if (notin(i, skip_ary)) {
      let max_ind;
      for (var j = 0; j < val_ary.length; j++) {
        let chk3;
        if (max_ind == undefined) {
          chk3 = true;
        }
        else {
          if (val_ary[max_ind] < val_ary[j]) {
            chk3 = true;
          }
          else {
            chk3 = false;
          }
        }
        if (val_ary[i] <= val_ary[j] && notin(j, skip_ary) && chk3) {
          max_ind = j;
        }
      }
      ind_ary.push(max_ind);
      skip_ary.push(max_ind);
    }
    if (i == val_ary.length - 1 && val_ary.length > skip_ary.length) {
      i = -1;
    }
    if (val_ary.length == skip_ary.length) {
      break;
    }
  }

  let result_array = new Array();
  for (var i = 0; i < ind_ary.length; i++) {
    result_array[i] = nam_ary[ind_ary[i]];
  }
  return result_array;
}
