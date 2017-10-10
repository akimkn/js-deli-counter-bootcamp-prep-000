var katzDeli = []

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nextinline = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${nextinline}.`
  } else {return "There is nobody waiting to be served!"}
}

function currentLine(katzDeliLine) {
  var result = "The line is currently: "
  for (i=0; i <katzDeliLine.length; i++) {{
    result === result + (`${i+1}"." ${katzDeliLine[i]}, `)
  }
  return result}  else {return "The line is currently empty."}
}
