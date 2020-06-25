function myFunction() {
  
  const id = '1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_bm = spreadsheet.getSheetByName('Baby Metrics');
  
  const lastRow = sheet_bm.getLastRow();
  
  var range_to_autofill = sheet_bm.getRange(2, 2, 2);
  var destination = sheet_bm.getRange(2, 2, 17);
  
//  range_to_autofill.autoFill(destination, SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
  range_to_autofill.autoFillToNeighbor(SpreadsheetApp.AutoFillSeries.ALTERNATE_SERIES);
}
