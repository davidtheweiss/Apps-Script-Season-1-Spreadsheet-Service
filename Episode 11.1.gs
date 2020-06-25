function toast() {
  SpreadsheetApp.getActiveSpreadsheet().toast("Happy President's Day", "What day is it?", -1);
}

function myFunction() {
  
  const html = HtmlService.createHtmlOutput('<p>This interface was written in HTML!</p>');
  
//  SpreadsheetApp.getActiveSpreadsheet().show(html);
  SpreadsheetApp.getActiveSpreadsheet().addMenu('Custom Functions', [{name: "Call a Toast!", functionName: "toast"}]);
}

//function onOpen(e) {
//   return toast();
//}


const id = '1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4';
const spreadsheet = SpreadsheetApp.openById(id);

//function trigger() {
//  ScriptApp.newTrigger('toast').forSpreadsheet(spreadsheet).onOpen().create();
//}
//
//function toast() {
//    
//  SpreadsheetApp.getUi().alert("Happy President's Day!");
//    
//}
