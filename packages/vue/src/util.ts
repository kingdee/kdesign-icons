export function updateCSS(cssText:string, id:string) {
    if(document.getElementById("@kdesign-icons-vue-style")) {
      return
    }
    const head = document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    if (id) {
      style.setAttribute('id', id);
    }
    //@ts-ignore
    if (style.styleSheet) { // IE
    //@ts-ignore
      style.styleSheet.cssText = cssText;
    } else {
      style.appendChild(document.createTextNode(cssText));
    }
    head.appendChild(style);
    return style;
  }