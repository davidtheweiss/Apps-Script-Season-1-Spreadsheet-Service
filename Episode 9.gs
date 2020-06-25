function myFunction() {
  
  const id = '1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_sb = spreadsheet.getSheetByName('Super Bowls');
  
  const lastRow = sheet_sb.getLastRow();
  const lastCol = sheet_sb.getLastColumn();
  
  let range = sheet_sb.getRange(lastRow + 1, 3, 1, 2);
  
  range.setFormulas([
    [`=COUNTUNIQUE(C2:C${lastRow})`, `=SUM(D2:D${lastRow})`]
  ]);
  
}
