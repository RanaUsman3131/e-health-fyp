exports.dateFormatForInputField = function (_date) {
  var now = new Date(_date);
  var month = now.getMonth() + 1;
  var day = now.getDate();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  let d = now.getFullYear() + "-" + month + "-" + day;
  console.log(d);
  return d;
};
