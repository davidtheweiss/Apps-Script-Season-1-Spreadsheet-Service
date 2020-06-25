function myFunction() {
  
  const id = '1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4';
  const spreadsheet = SpreadsheetApp.openById(id);
  const detroit = spreadsheet.getSheetByName('Detroit');
  const sheet_bm = spreadsheet.getSheetByName('Baby Metrics');
  
  const lastRow = sheet_bm.getLastRow();
  const lastCol = sheet_bm.getLastColumn();
  const maxRow = sheet_bm.getMaxRows();
  const maxCol = sheet_bm.getMaxColumns();
  
//  var range = sheet_bm.getRange(1, 1, maxRow, maxCol);
//  detroit.getBandings()[0].copyTo(range);
  
//  sheet_bm.copyTo(spreadsheet);
  
  var range_to_copy = sheet_bm.getRange(2, 2);
  var range_to_paste = sheet_bm.getRange(3, 2, lastRow - 2, 1);
  
  range_to_copy.copyTo(range_to_paste, {contentsOnly: true});
  
}
