function myFunction() {
  
  const id = '1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_fd = spreadsheet.getSheetByName('Formatting Demo');
    
  
  // sheet_fd.getRange('A1').setBackground('orange');
  sheet_fd.getRange('A1').setBackgroundRGB(0, 50, 180);
  sheet_fd.getRange('B1').setFontColor('#00ff80');
  sheet_fd.getRange('C1').setFontWeight('bold');
  sheet_fd.getRange('D1').setFontStyle('italic');
  sheet_fd.getRange('E1').setFontLine('underline');
  sheet_fd.getRange('F1').setFontFamily('Impact');
  sheet_fd.getRange('G1').setFontSize(24);
  sheet_fd.getRange('H1').setBorder(false, true, true, true, null, null, 'blue', SpreadsheetApp.BorderStyle.DOTTED);
  
}
