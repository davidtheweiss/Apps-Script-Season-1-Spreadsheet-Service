function myFunction() {
  
  const ui = SpreadsheetApp.getUi();
  const html = HtmlService.createHtmlOutput('<p>This interface was written in HTML!</p>');
  
//  ui.alert("ALERT!", "This is an alert", ui.ButtonSet.YES_NO);
//  let res = ui.prompt("About you", "What is your favorite type of cheese?", ui.ButtonSet.OK_CANCEL);
//  Logger.log(res.getResponseText());
//  ui.showModalDialog(html, "HTML!");
//  ui.showModelessDialog(html, "HTML!");
//  ui.showSidebar(html);
//  ui.createAddonMenu().addItem('I need an alert', 'alertMe').addToUi();
  ui.createMenu("Custom Functions").addSubMenu(ui.createMenu("Episode 1.11").addItem("alertMe", 'alertMe')).addToUi();
  
}

function alertMe() {
  
  return SpreadsheetApp.getUi().alert("You've been alerted!");
  
}
