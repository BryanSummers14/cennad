import Http from "./http.js";

var _http = new Http();

export default class Cennad {
  constructor(_projectId) {
    this._projectId = _projectId;
  }

  captureException(_err, _opts) {
    var error = {
      name: _err.name,
      message: _err.message,
      stack: _err.stack,
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      language: navigator.language,
      projectId: this._projectId
    };
    if (_opts) {
      error = Object.assign({}, error, _opts);
    }
    _http.post("logError", error);
  }

  captureMessage(_message, _opts) {
    var message = {
      message: _message,
      projectId: this._projectId
    };
    if (Boolean(_opts)) {
      message = Object.assign({}, message, _opts);
    }
    _http.post("logInfo", message);
  }
}
