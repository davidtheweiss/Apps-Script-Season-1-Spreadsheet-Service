function myFunction() {
  
  const id = '1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_sb = spreadsheet.getSheetByName('Super Bowls');
  
  const lastRow = sheet_sb.getLastRow();
  const lastCol = sheet_sb.getLastColumn();
  
//  sheet_sb.sort(5, false);
  
//  let range = sheet_sb.getRange(2, 1, lastRow - 1, lastCol);
//  
//  range.sort([
//    {column: 3, ascending: true},
//    {column: 4, ascending: false}
//  ]);
  
  let range = sheet_sb.getDataRange();
  
  range.createFilter();
}
