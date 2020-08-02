// 1. Go Ispector (Ctrl+Shift+C)
// 2. Copy innerHtml from <div id="grilla" class="grilla" ... >

// * class=casilla   ----  without initial value
// * class=casilla2  ----  with initial value

// * id=cas0  to id=cas80

const dataMatch = `

<div
  id="td0"
  class="celda"
  style="
    margin-left: 0px;
    margin-top: 0px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc0"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu0" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div id="tde0" class="celda_errores" style="width: 37px; height: 37px;"></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas0"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can0"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu0"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td1"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 0px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc1"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu1" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div id="tde1" class="celda_errores" style="width: 37px; height: 37px;"></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas1"
    value="5"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can1"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu1"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td2"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 0px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc2"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu2" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div id="tde2" class="celda_errores" style="width: 37px; height: 37px;"></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas2"
    value="8"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can2"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu2"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td3"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 0px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc3"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu3" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div id="tde3" class="celda_errores" style="width: 37px; height: 37px;"></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas3"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can3"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu3"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td4"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 0px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc4"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu4" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div id="tde4" class="celda_errores" style="width: 37px; height: 37px;"></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas4"
    value="3"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can4"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu4"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td5"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 0px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc5"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu5" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div id="tde5" class="celda_errores" style="width: 37px; height: 37px;"></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas5"
    value="9"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can5"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu5"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td6"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 0px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc6"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu6" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div id="tde6" class="celda_errores" style="width: 37px; height: 37px;"></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas6"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can6"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu6"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td7"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 0px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc7"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu7" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div id="tde7" class="celda_errores" style="width: 37px; height: 37px;"></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas7"
    value="6"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can7"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu7"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td8"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 0px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc8"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu8" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div id="tde8" class="celda_errores" style="width: 37px; height: 37px;"></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas8"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can8"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu8"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td9"
  class="celda"
  style="
    margin-left: 0px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc9"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu9" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div id="tde9" class="celda_errores" style="width: 37px; height: 37px;"></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas9"
    value="3"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can9"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu9"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td10"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc10"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu10" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde10"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas10"
    value="7"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can10"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu10"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td11"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc11"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu11" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde11"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas11"
    value="1"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can11"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu11"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td12"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc12"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu12" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde12"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas12"
    value="6"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can12"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu12"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td13"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc13"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu13" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde13"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas13"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can13"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu13"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td14"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc14"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu14" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde14"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas14"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can14"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu14"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td15"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc15"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu15" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde15"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas15"
    value="5"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can15"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu15"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td16"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc16"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu16" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde16"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas16"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can16"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu16"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td17"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc17"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu17" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde17"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas17"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can17"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu17"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td18"
  class="celda"
  style="
    margin-left: 0px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc18"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu18" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde18"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas18"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can18"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu18"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td19"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc19"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu19" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde19"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas19"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can19"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu19"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td20"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc20"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu20" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde20"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas20"
    value="9"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can20"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu20"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td21"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc21"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu21" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde21"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas21"
    value="1"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can21"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu21"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td22"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc22"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu22" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde22"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas22"
    value="2"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can22"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu22"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td23"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc23"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu23" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde23"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas23"
    value="5"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can23"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu23"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td24"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc24"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu24" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde24"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas24"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can24"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu24"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td25"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc25"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu25" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde25"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas25"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can25"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu25"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td26"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc26"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu26" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde26"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas26"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can26"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu26"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td27"
  class="celda"
  style="
    margin-left: 0px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc27"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu27" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde27"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas27"
    value="1"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can27"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu27"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td28"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc28"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu28" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde28"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas28"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can28"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu28"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td29"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc29"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu29" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde29"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas29"
    value="6"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can29"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu29"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td30"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc30"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu30" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde30"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas30"
    value="3"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can30"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu30"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td31"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc31"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu31" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde31"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas31"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can31"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu31"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td32"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc32"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu32" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde32"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas32"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can32"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu32"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td33"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc33"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu33" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde33"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas33"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can33"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu33"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td34"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc34"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu34" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde34"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas34"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can34"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu34"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td35"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc35"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu35" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde35"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas35"
    value="7"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can35"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu35"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td36"
  class="celda"
  style="
    margin-left: 0px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc36"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu36" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde36"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas36"
    value="9"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can36"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu36"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td37"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc37"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu37" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde37"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas37"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can37"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu37"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td38"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc38"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu38" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde38"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas38"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can38"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu38"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td39"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc39"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu39" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde39"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas39"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can39"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu39"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td40"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc40"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu40" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde40"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas40"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can40"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu40"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td41"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc41"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu41" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde41"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas41"
    value="1"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can41"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu41"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td42"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc42"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu42" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde42"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas42"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can42"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu42"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td43"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc43"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu43" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde43"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas43"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can43"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu43"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td44"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc44"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu44" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde44"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas44"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can44"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu44"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td45"
  class="celda"
  style="
    margin-left: 0px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc45"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu45" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde45"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas45"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can45"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu45"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td46"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc46"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu46" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde46"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas46"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can46"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu46"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td47"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc47"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu47" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde47"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas47"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can47"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu47"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td48"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc48"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu48" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde48"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas48"
    value="4"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can48"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu48"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td49"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc49"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu49" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde49"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas49"
    value="5"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can49"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu49"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td50"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc50"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu50" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde50"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas50"
    value="6"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can50"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu50"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td51"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc51"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu51" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde51"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas51"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can51"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu51"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td52"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc52"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu52" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde52"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas52"
    value="2"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can52"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu52"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td53"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc53"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu53" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde53"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas53"
    value="1"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can53"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu53"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td54"
  class="celda"
  style="
    margin-left: 0px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc54"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu54" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde54"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas54"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can54"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu54"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td55"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc55"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu55" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde55"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas55"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can55"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu55"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td56"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc56"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu56" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde56"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas56"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can56"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu56"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td57"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc57"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu57" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde57"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas57"
    value="5"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can57"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu57"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td58"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc58"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu58" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde58"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas58"
    value="8"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can58"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu58"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td59"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc59"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu59" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde59"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas59"
    value="7"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can59"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu59"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td60"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc60"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu60" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde60"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas60"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can60"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu60"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td61"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc61"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu61" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde61"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas61"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can61"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu61"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td62"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc62"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu62" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde62"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas62"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can62"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu62"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td63"
  class="celda"
  style="
    margin-left: 0px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc63"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu63" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde63"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas63"
    value="7"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can63"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu63"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td64"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc64"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu64" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde64"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas64"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can64"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu64"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td65"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc65"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu65" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde65"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas65"
    value="2"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can65"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu65"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td66"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc66"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu66" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde66"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas66"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can66"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu66"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td67"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc67"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu67" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde67"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas67"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can67"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu67"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td68"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc68"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu68" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde68"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas68"
    value="4"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can68"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu68"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td69"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc69"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu69" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde69"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas69"
    value="3"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can69"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu69"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td70"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc70"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu70" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde70"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas70"
    value="1"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can70"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu70"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td71"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc71"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu71" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde71"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas71"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can71"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu71"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td72"
  class="celda"
  style="
    margin-left: 0px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc72"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu72" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde72"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas72"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can72"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu72"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td73"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc73"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu73" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde73"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas73"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can73"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu73"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td74"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc74"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu74" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde74"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas74"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can74"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu74"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td75"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc75"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu75" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde75"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas75"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can75"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu75"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td76"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc76"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu76" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde76"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas76"
    value="1"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can76"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu76"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td77"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc77"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu77" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde77"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas77"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can77"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu77"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td78"
  class="celda"
  style="
    margin-left: 3px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc78"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu78" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde78"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    class="casilla"
    type="text"
    id="cas78"
    value=""
    style="width: 45px; height: 31px; font-size: 26px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato1"
    id="can78"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: none;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato2"
    id="canu78"
    value=""
    style="width: 45px; height: 13px; font-size: 11px; display: inline;"
  />
</div>
<div
  id="td79"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc79"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu79" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde79"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas79"
    value="7"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can79"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu79"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>
<div
  id="td80"
  class="celda"
  style="
    margin-left: 1px;
    margin-top: 1px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: 45px;
    height: 45px;
  "
>
  <div
    id="tdc80"
    class="celda_colorear"
    style="width: 45px; height: 45px;"
  ></div>
  <div id="tdu80" class="celda_unicos" style="width: 39px; height: 39px;"></div>
  <div
    id="tde80"
    class="celda_errores"
    style="width: 37px; height: 37px;"
  ></div>
  <input
    maxlength="1"
    autocomplete="off"
    readonly=""
    class="casilla2"
    type="text"
    id="cas80"
    value="8"
    style="width: 45px; height: 31px; font-size: 26px; color: rgb(153, 34, 34);"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="can80"
    value=""
    style="width: 45px; height: 13px; font-size: 10px;"
  /><input
    maxlength="9"
    autocomplete="off"
    type="text"
    class="candidato3"
    id="canu80"
    value=""
    style="width: 45px; height: 13px; font-size: 11px;"
  />
</div>



`;

let boardRaw = [];

for (let index = 0; index < 81; index++) {
  const nameClass = "cas" + index;
  let location = dataMatch.indexOf(nameClass);
  let start = location + 17;
  if (index > 9) start++;
  let value = dataMatch.substr(start, 1);
  if (value === '"') {
    value = 0;
  }
  boardRaw.push(parseInt(value));
}

export default boardRaw;