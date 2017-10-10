var katzDeli = []

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDelLine) {
  if (katzDeliLine.length=0) {
    return "There is nobody waiting to be served!"
  }  else {
    return katzDeliLine[0]
    katzDeliLine.shift()
  }
}
