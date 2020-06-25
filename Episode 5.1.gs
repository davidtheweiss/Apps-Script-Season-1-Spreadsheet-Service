function myFunction() {
  
  const id = '1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_w_data = spreadsheet.getSheetByName('Sheet with Data');
  
  const lastRow = sheet_w_data.getLastRow();
  const lastCol = sheet_w_data.getLastColumn();
  const maxRow = sheet_w_data.getMaxRows();
  const maxCol = sheet_w_data.getMaxColumns();
  
//  sheet_w_data.deleteColumns(lastCol + 1, maxCol - lastCol);
  
  var range = sheet_w_data.getRange(1, 1, maxRow, maxCol);
  
  range.createFilter();
}
