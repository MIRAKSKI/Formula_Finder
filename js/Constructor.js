let materials_table = [["Material", "Compression (MPa)", "Flexure (MPa)", "Thermal Conductivity (λ (W/m*K))", "Thermal Resistance (R - m²*K/W for 1 cm)", "Sound Velocity (m/s)", "Density (g/cm³)"]
,["Glass Powder", 31.18, 3.15, 1, 0.0134, 5000, 2.25]
,["Clay", 5.3, 2.6, 1.25, 0.0125, 650, 2.2]
,["Cement", 44.12, 4.8, 1.3, 0.0091, 3750, 3.1]
,["Lime", 5.3, 0.1, 1.25, 0.0084, 1150, 2.4]
,["Gravel", 70, 7, 2.5, 0.0063, 4500, 2.65]
,["Natural Fiber", 3.6, 4.8, 0.215, 0.1775, 300, 0.8]
,["Electronic Waste", "Varis", "Varis", "Varis (0.2 - 200+)", "Varis", "Varis", "Varis"]];

function creatanelemn(kng, clss, id, name, style, title, type, value, elem, onclick, disabled, innertext) {
  const kingbck = document.createElement(kng)
  if (clss != "") {
    kingbck.setAttribute('class', clss);
  }
  if (id != "") {
    kingbck.setAttribute('id', id);
  }
  if (name != "") {
    kingbck.setAttribute('name', name);
  }
  if (style != "") {
    kingbck.setAttribute('style', style);
  }
  if (title != "") {
    kingbck.setAttribute('title', title);
  }
  if (type != "") {
    kingbck.setAttribute('type', type);
  }
  if (value != "") {
    kingbck.setAttribute('value', value);
  }
  if (onclick != "") {
    kingbck.setAttribute('onclick', onclick);
  }
  if (disabled != "") {
    kingbck.setAttribute('disabled', disabled);
  }
  if (innertext != "") {
    kingbck.innerText = innertext;
  }
  if (elem != "") {
    kingbck.appendChild(elem);
  }
  return kingbck
}
function Constructor() {
  let titels = ["What this Site Do?", "Definition of Timshimt", "Properties of Additives", "Formula Calculation", "How does the system work?"];
  let content = [["Have you ever wanted to experiment with different configurations to choose the best one?\nThis is what my system does, it brings together an infinite number of configurations to choose the best one."
  ,"Doing this, this system will save a lot of time, energy and resources."]
  ,["Traditional gypsum, or timshmet, is a substance known since ancient times.\nIt is formed from water bonds and is a natural solid.", "It is composed of calcium sulfate dihydrate, or hydrated calcium sulfate, with the chemical formula (CaSO4.2H2O)."
  ,"Traditional gypsum is a widely available raw material on earth and is the most common sulfur mineral in nature. \nIt can be found with dolomite, clay, and limestone. Its color is gray or white, sometimes with a reddish tinge."
  ,"It is a well-known building material in traditional construction and is widely used in the desert.\nIt is extracted by thermal conversion of a type of brittle sedimentary rock, which is abundant in the desert, especially the lowlands."
  ,"Traditional gypsum (timshmet) is produced by burning stones in traditional kilns. It is made by a group of workers, either skilled in this industry or used for private use."]
  ,[2]
  ,[3]
  ,["By analyzing experiments and using artificial intelligence, the system guesses the best configurations to achieve the best performance."]];
  //
  let traditional_prop = {pos:["It hardens quickly due to its charcoal content.", "It's cool in the summer and warm in the winter.", "It's economical.", "It's both a heat and sound insulator.", "It's easy to shape thanks to its flexibility before drying."]
  ,cons:["Lack of moisture resistance.", "Rapid hardening.", "Lack of kilns and the disappearance of the manufacturing craft.", "Poor load-bearing capacity."]}
  let constraction = creatanelemn("div", "home", "consta", "", "", "", "", "", "", "", "", "");
  for (var i = 0; i < titels.length; i++) {
    let h2 = creatanelemn("h2", "", "", "", "", "", "", "", "", "", "", titels[i]);
    let col = creatanelemn("div", "Ver_hol", `col${i}`, "", "", "", "", "", h2, "", "", "");let elms = [];
    if (i != 2 && i != 3) {
      elms = content[i];
    }
    for (var t = 0; t < elms.length; t++) {
      let p = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", elms[t]);
      col.appendChild(p);
    }
    if (i == 1) {
      let pg = ["Pros", "Cons"];
      let trad_pp = ["pos", "cons"];
      for (var t = 0; t < pg.length; t++) {
        let h3 = creatanelemn("h3", "", "", "", "", "", "", "", "", "", "", pg[t]);
        col.appendChild(h3);
        let ul = document.createElement("ul");
        let ary = traditional_prop[trad_pp[t]]
        for (var u = 0; u < ary.length; u++) {
          let li = document.createElement("li");
          li.innerText = ary[u];
          ul.appendChild(li);
        }
        col.appendChild(ul);
      }
      let sub_title = creatanelemn("h3", "", "", "", "", "", "", "", "", "", "", "Timshmit Properties");//Timshmit
      let table = creatanelemn("table", "Col_tab", "tem_prop", "", "", "", "", "", "", "", "", "");
      let tim_tab = [["Compression (MPa)", "Flexure (MPa)", "Thermal Conductivity (λ (W/m*K))", "Thermal Resistance (R - m²*K/W for 1 cm)", "Sound Velocity (m/s)", "Density (g/cm³)"]
      ,[1.63, 0.63, 0.41, 0.26, 1891.48, 1.47]];
      for (var t = 0; t < tim_tab.length; t++) {
        let row_typ;
        if (t == 0) {
          row_typ = "th";
        }
        else {
          row_typ = "td";
        }
        let row = creatanelemn("tr", "", "", "", "", "", "", "", "", "", "", "");
        for (var u = 0; u < tim_tab[t].length; u++) {
          let cell = creatanelemn(row_typ, "", "", "", "", "", "", "", "", "", "", materials_table[t][u]);
          row.appendChild(cell);
        }
        table.appendChild(row);
      }
      col.appendChild(sub_title);
      col.appendChild(table);
    }
    if (i == 2) {
      let table = creatanelemn("table", "Col_tab", "mat_prop", "", "", "", "", "", "", "", "", "");
      for (var t = 0; t < materials_table.length; t++) {
        let row_typ;
        if (t == 0) {
          row_typ = "th";
        }
        else {
          row_typ = "td";
        }
        let row = creatanelemn("tr", "", "", "", "", "", "", "", "", "", "", "");
        for (var u = 0; u < materials_table[t].length; u++) {
          let cell = creatanelemn(row_typ, "", "", "", "", "", "", "", "", "", "", materials_table[t][u]);
          row.appendChild(cell);
        }
        table.appendChild(row);
      }
      col.appendChild(table);
    }
    if (i == 3) {
      let btn1 = creatanelemn("input", "", "", "", "", "", "button", "Based on Properties", "", "GoCalculate(0)", "", "");
      let btn2 = creatanelemn("input", "", "", "", "", "", "button", "Based on Materials", "", "GoCalculate(1)", "", "");
      let div = creatanelemn("div", "btns_hol", ``, "", "", "", "", "", btn1, "", "", "");
      div.appendChild(btn2);
      let div1 = creatanelemn("div", "Cal_hol", `CAL${i}`, "", "", "", "", "", div, "", "", "");
      col.appendChild(div1);
    }
    let row = creatanelemn("div", "Hor_hol", `row${i}`, "", "", "", "", "", col, "", "", "");
    constraction.appendChild(row);
  }
  let yt = "<div class=\"footer\">    <div class=\"list-footer\">      <nav>        <ul>          <li><a href=\"https://mirakski.github.io/AltynKing/\" class=\"activfoot\" rel=\"nofollow\">HOME</a></li>          <li><a href=\"https://mirakski.github.io/AltynKing/Contact.html\" class=\"list-footer-a\">CONTACT</a></li>          <li><a href=\"https://mirakski.github.io/AltynKing/About.html\" class=\"list-footer-a\">ABOUT</a></li>        </ul>      </nav>    </div>    <div class=\"list-foot-er\">      <div class=\"list-cont-act\">        <div class=\"id-img\">          <a href=\"https://mirakski.github.io/AltynKing/\"  rel=\"nofollow\"><div class=\"Logodown\"></div></a>        </div>      </div>      <div class=\"listXholder\">        <div class=\"list-contact\">          <div class=\"cont-holder\">            <a href=\"https://www.facebook.com/ik1ms\" target=\"_blank\"> <img src=\"img/fb.png\" alt=\"facebook\"> </a>          </div>          <div class=\"cont-holder\">            <a href=\"https://www.instagram.com/kims_kh\" target=\"_blank\"> <img src=\"img/ig.png\" alt=\"instagram\"> </a>          </div>          <div class=\"cont-holder\">            <a href=\"https://www.linkedin.com/in/abdelkarim-khelfaoui-868127197/\" target=\"_blank\"> <img src=\"img/in.png\" alt=\"linkedin\"> </a>          </div>          <div class=\"cont-holder\">            <a href=\"https://twitter.com/abdokhelfaoui\" target=\"_blank\"> <img src=\"img/tw.png\" alt=\"twitter\"> </a>          </div>        </div>      </div>    </div>  </div>";
  document.getElementById('site').appendChild(constraction);
  document.getElementsByTagName('body')[0].innerHTML += yt;
}
