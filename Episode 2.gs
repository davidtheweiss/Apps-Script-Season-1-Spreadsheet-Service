function myFunction() {
  const spreadsheet = SpreadsheetApp.openById('1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4');
  spreadsheet.getSheetByName('Sheet1');
  spreadsheet.getSheets();
  
  spreadsheet.insertSheet('Detroit', 0, {template: spreadsheet.getSheetByName('Sheet1')});
}
