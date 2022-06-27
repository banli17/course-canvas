import Vue from "vue/dist/vue.esm";
import routes from "./routes.js";
import * as dat from "dat.gui";
import _ from "./utils";

import "./main.less";

main();

function main() {
  loadMenu();
  loadAppAndRegisterGlobalVar();
  loadEntry();
}

function loadAppAndRegisterGlobalVar() {
  // 创建 3d
  window.gui = new dat.GUI();
  window._ = _;
  window.log = console.log;

  window.canvas = document.querySelector("#canvas");
  canvas.width = 500;
  canvas.height = 500;
  window.ctx = canvas.getContext("2d");
}

// 根据 search 加载不同的 js
function parseUrl(str) {
  return str.split(/&/).reduce((a, b) => {
    const [k, v] = b.split("=");
    if (k) {
      a[k] = v;
    }
    return a;
  }, {});
}

function loadMenu() {
  new Vue({
    el: "#app",
    data() {
      return {
        routes,
      };
    },
  });
}

function loadEntry() {
  const { category, id } = parseUrl(location.search.slice(1));

  require(`./${category}/${id}`);
}
