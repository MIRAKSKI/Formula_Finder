function Prioriti_filter(ary, prioriti, col) {
  let big_keys = Object.keys(ary);
  let limi_array = new Object();
  for (var i = 0; i < big_keys.length; i++) {
    let obj_1 = ary[big_keys[i]];//returns object comp/formula
    let prop_1 = obj_1["comp"][prioriti];
    let lili_key = Object.keys(limi_array);
    if (lili_key.length <= col) {
      limi_array[`d${i}`] = obj_1;
    }
    else {
      for (var u = 0; u < lili_key.length; u++) {
        let working_obj = limi_array;
        if (working_obj[lili_key[u]]["comp"][prioriti] < prop_1) {
          working_obj[lili_key[u]] = obj_1;
          let val_qry = new Array();
          let nam_qry = new Array();
          let temp_keys = Object.keys(working_obj);
          for (var g = 0; g < temp_keys.length; g++) {
            val_qry[g] = working_obj[temp_keys[g]]["comp"][prioriti];
            nam_qry[g] = temp_keys[g];
          }
          let temp_objj = working_obj;
          let cir_qry = twoCompiener(nam_qry, val_qry);
          for (var k = 0; k < cir_qry.length; k++) {
            working_obj[`d${k}`] = temp_objj[cir_qry[k]];
          }
          limi_array = {};
          limi_array = working_obj;
        }
      }
    }
  }
  return limi_array;
}

function ValueFatcher(priorities_mag, arrange_array) {
  let big_temp_array = Big_res;
  let output_array = new Object(), collacter = 2;
  let switch_obj = {"Compression":"CF", "Flexure":"FF", "Thermo Conduct":"CT", "Thermo Resiste":"RT"};
  for (var i = 0; i < arrange_array.length; i++) {
    arrange_array[i] = switch_obj[arrange_array[i]];
  }
  for (var i = 0; i < priorities_mag.length; i++) {
    collacter += eval(priorities_mag[i]);
  }
  for (var i = 0; i < arrange_array.length; i++) {
    big_temp_array = Prioriti_filter(big_temp_array, arrange_array[i], collacter);
    let obky = Object.keys(big_temp_array);
    let tyx_obj = big_temp_array;
    big_temp_array = {};
    output_array = {}
    for (var h = 0; h < obky.length - eval(priorities_mag[i]); h++) {
      big_temp_array[obky[h]] = tyx_obj[obky[h]];
      output_array[obky[h]] = tyx_obj[obky[h]];
    }
  }
  return output_array;
}

function GoCalculate(ty) {
  let prop_array = ["Compression", "Flexure", "Thermo Conduct", "Thermo Resiste"];
  if (ty == 0) {
    document.getElementById('col3').innerHTML = "<h2>Formula Calculation</h2>";
    let stages = 5;
    let hol = creatanelemn("div", "btns_holr", "btns_hol", "", "", "", "", "", "", "", "", "");
    for (var i = 0; i < prop_array.length; i++) {
      let p = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", prop_array[i]);
      let slct = creatanelemn("select", "", `${prop_array[i].replace(" ", "_")}`, "", "", "", "", "", "", "", "", "");
      slct.setAttribute("onchange", "resetop(this.id)")
      for (var d = 0; d < stages; d++) {
        let innr = d;
        let pp = creatanelemn("option", "", "", "", "", "", "", "", "", "", "", innr);
        slct.appendChild(pp);
      }
      let div = creatanelemn("div", "btns_hor", "", "", "", "", "", "", p, "", "", "");
      div.appendChild(slct);
      hol.appendChild(div);
    }
    let tabdv = creatanelemn("div", "Cal_hol", "", "", "", "", "", "", hol, "", "", "");
    document.getElementById('col3').appendChild(tabdv);
    let cal = creatanelemn("input", "", "", "", "", "", "button", "Combine", "", "GoCalculate(2)", "", "");
    let hoh = creatanelemn("div", "btns_hol", "btns_hol", "", "", "", "", "", cal, "", "", "");
    let coh = creatanelemn("div", "Cal_hol", "", "", "", "", "", "", hoh, "", "", "");
    document.getElementById('col3').appendChild(coh);
  }
  else if (ty == 1) {
    //
  }
  else if (ty == 2) {
    let arrng_obj = new Object();
    for (var i = 0; i < prop_array.length; i++) {
      let ind = document.getElementById(prop_array[i].replace(" ", "_")).value;
      arrng_obj[ind] = prop_array[i];
    }
    document.getElementById('col3').innerHTML = "<h2>Formula Calculation</h2>";
    let obj_keys = Object.keys(arrng_obj);
    obj_keys.sort((a, b) => parseFloat(b) - parseFloat(a));
    let tru_obj = new Array();
    for (var i = 0; i < obj_keys.length; i++) {
      tru_obj[i] = arrng_obj[obj_keys[i]];
    }
    let Objary = ValueFatcher(obj_keys, tru_obj);
    let Arrary = new Array();
    let tex_ky = Object.keys(Objary);
    for (var i = 0; i < tex_ky.length; i++) {
      Arrary[i] = Objary[tex_ky[i]];
    }
    for (var i = 0; i < Arrary.length; i++) {
      let obje = Arrary[i];
      let le = ["comp", "furmola"];
      let table = creatanelemn("table", "Col_tab", "tem_prop", "", "", "", "", "", "", "", "", "");
      let how = creatanelemn("tr", "", "", "", "", "", "", "", "", "", "", "");
      let headers = ["Compression (MPa)", "Flexure (MPa)", "Thermal Conductivity (λ (W/m*K))", "Thermal Resistance (R - m²*K/W for 1 cm)", "Sound Velocity (m/s)", "Density (g/cm³)"];
      for (var x = 0; x < headers.length; x++) {
        let cell = creatanelemn("th", "", "", "", "", "", "", "", "", "", "", headers[x]);
        how.appendChild(cell);
      }
      table.appendChild(how);
      for (var u = 0; u < le.length; u++) {
        let row = creatanelemn("tr", "", "", "", "", "", "", "", "", "", "", "");
        if (u == 0) {
          let olb = obje[le[u]];
          let el = ["CF", "FF", "CT", "RT", "VS", "D"];
          for (var x = 0; x < el.length; x++) {
            let cell = creatanelemn("th", "", "", "", "", "", "", "", "", "", "", olb[el[x]]);
            row.appendChild(cell);
          }
        }
        else {
          let olb = obje[le[u]];
          let formul = "";
          for (var x = 0; x < olb.length; x++) {
            let skey = Object.keys(olb[x]);
            formul += `${skey}(${olb[x][skey]}%)`;
            if (x != olb.length - 1) {
              formul += "+";
            }
          }
          let cell = creatanelemn("td", "", "", "", "", "", "", "", "", "", "", formul);
          cell.setAttribute("colspan", 6);
          row.appendChild(cell);
        }
        table.appendChild(row);
      }
      let tabdv = creatanelemn("div", "Cal_hol", "", "", "", "", "", "", table, "", "", "");
      document.getElementById('col3').appendChild(tabdv);
    }
  }
}

function resetop(id) {
  let prop_array = ["Compression", "Flexure", "Thermo_Conduct", "Thermo_Resiste"];
  let el_val = document.getElementById(id).value;
  for (var i = 0; i < prop_array.length; i++) {
    if (prop_array[i] != id) {
      let options = document.getElementById(prop_array[i]).children;
      let valvs = new Array();
      for (var f = 0; f < options.length; f++) {
        if (options[f].value == el_val) {
          let selected = document.getElementById(prop_array[i]).value;
          document.getElementById(prop_array[i]).remove(f);
          break;
        }
      }
    }
  }
}

window.onscroll = function() {scrollFunction()};
prevScrollpos = window.pageYOffset;
function scrollFunction() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  }
  else {
    document.getElementById("navbar").style.top = "-12%";
  }
prevScrollpos = currentScrollPos;
}
