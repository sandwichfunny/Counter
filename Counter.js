/*

© 2021 Copyright sandwich

*/

let onceDate = args.widgetParameter
if ( onceDate == null ) { onceDate = "2020-12-30" }

const date1 = new Date();
const date2 = new Date(onceDate)
const days = Math.ceil(Math.abs(date2 - date1)/ (1000 * 60 * 60 * 24)); 

let widget = await createWidget()
const url = "https://area.sinaapp.com/bingImg/"
const img = await new Request(url);
widget.backgroundImage = await img.loadImage();

if (!config.runsInWidget) {
  await widget.presentSmall()
}

async function createWidget(items) {
  const list = new ListWidget()
  list.spacing = 10

  let line0 = list.addText(`been`)
  line0.textColor = Color.white()
  line0.font = Font.ultraLightSystemFont(30)

  let line1 = list.addText(days.toString() + " days")
  line1.textColor = Color.white()
  line1.font = Font.ultraLightSystemFont(30)
  
  return list
}


// 三明治
