function myFunction() {
  
  const id = '1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_detroit = spreadsheet.getSheetByName('Detroit');
  
  var range = sheet_detroit.getRange(3, 1, 1, 4);
  
  range.setValues([['Julian Edelman', 'New England', 'Wide Receiver', 'Jumping on Cars']]);
    
}
