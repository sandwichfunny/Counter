/*

© 2021 Copyright sandwich

*/

let onceDate = args.widgetParameter
if ( onceDate == null ) { onceDate = "2020-12-30" }

const date1 = new Date();
const date2 = new Date(onceDate)// 
const days = Math.ceil(Math.abs(date2 - date1)/ (1000 * 60 * 60 * 24)); 

let widget = await createWidget()
widget.backgroundColor = new Color("#191919")
  const bgColor = new LinearGradient()
  bgColor.colors = [new Color("#1c1c1c"), new Color("#29323c")]
  bgColor.locations = [0.0, 1.0]
  widget.backgroundGradient = bgColor

if (!config.runsInWidget) {
  await widget.presentSmall()
}

Script.setWidget(widget)
Script.complete()

async function createWidget(items) {
  const list = new ListWidget()
  list.spacing = 10
    
  let line0 = list.addText(`距离`)
  line0.textColor = Color.white()
  line0.textSize = 15
  line0.textOpacity = 0.7
  
  let line1 = list.addText(`重要的日子`)
  line1.textColor = Color.white()
  line1.textSize = 18

  let line2 = list.addText(`已经`)
  line2.textColor = Color.white()
  line2.textSize = 15
  line2.textOpacity = 0.7
  
  let line3 = list.addText(days.toString() + " 天")
  line3.textColor = Color.white()
  line3.textSize = 18
  return list
}


// 三明治
