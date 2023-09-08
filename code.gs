function doGet() {
  let html = HtmlService.createTemplateFromFile("index")
  return html.evaluate()
}

function searchSheet(acc) {
  let fileSheet = SpreadsheetApp.openById("11_KD2pvkydgdmWuFGqfoWDuNALomhhVzdtqv_Gnqsfs")
  let sheet = fileSheet.getSheetByName("test")
  let indexColumn = 1
  let searchText = acc
  let searchResult = sheet.getRange(2, indexColumn, sheet.getLastRow()).createTextFinder(searchText).findAll()
  let arrayResult = []
  searchResult.forEach((value, index) => {
    let range = searchResult[index];
    // let rangeValue = range.getValue();
    let rowValue = sheet.getRange(range.getRow(), 1, 1, sheet.getLastColumn()).getValues();
    let objectResult = {"account":rowValue[0][0], "trackingNum":rowValue[0][1], "tel":rowValue[0][2]}
    arrayResult.push(objectResult)
  });
  // Logger.log(arrayResult)
  return arrayResult
}
