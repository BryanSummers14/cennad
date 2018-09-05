export default class Http {
  constructor() {
    this.url = "aHR0cHM6Ly91cy1jZW50cmFsMS1lcnJvci1sb2dnaW5nLW1vbml0b3IuY2xvdWRmdW5jdGlvbnMubmV0Lw==";
  }

  post(_type, _data) {
    var postURL = atob(this.url) + _type
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 201) {
        console.log("[Cennad] " + _type.slice(3) + " successfully logged");
      }
    };
    xhr.open("POST", postURL);
    xhr.send(JSON.stringify(_data));
  }
}
