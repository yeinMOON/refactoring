let _title = "untitled";

function title() {
  return _title;
}

function setTitle(arg) {
  _title = arg;
}

result += `<h1>${title()}</h1>`;
setTitle(obj["articleTitle"]);
