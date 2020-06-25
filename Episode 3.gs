function myFunction() {
  
  const id = '1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_detroit = spreadsheet.getSheetByName('Detroit');
  
  var range = sheet_detroit.getRange(2, 1, 1, 4);
  
//  Logger.log(range.getValue());
  Logger.log(range.getValues());
  
  Logger.log(sheet_detroit.getSheetValues(2, 1, 1, 4));
  
  Logger.log(sheet_detroit.getDataRange().getValues());
}
