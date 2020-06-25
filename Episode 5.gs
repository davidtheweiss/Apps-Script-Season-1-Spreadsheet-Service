function myFunction() {
  
  const id = '1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_detroit = spreadsheet.getSheetByName('Detroit');
  
  Logger.log(sheet_detroit.getLastRow());
  Logger.log(sheet_detroit.getLastColumn());
  
  sheet_detroit.getRange(sheet_detroit.getLastRow() + 1, 1, 1, sheet_detroit.getLastColumn()).setValues([
    ['Brown Antonio', 'Everywhere', 'WR', 'Too Good for the NFL']
  ]);
}
