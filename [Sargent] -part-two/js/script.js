var eventType = prompt("What kind of event shall you be attending, casual, formal, or semi-formal?")

var tempFahr = prompt("What temperature will it be outside?(in degrees Fahrenheit)")

var clothingSuggestion1

var clothingSuggestion2

if (eventType == "casual") {
  clothingSuggestion1 = ("something comfy")
}

else if (eventType == "semi-formal") {
  clothingSuggestion1 = ("a polo")
}

else if (eventType == "formal") {
  clothingSuggestion1 = ("a suit")
}

if (tempFahr < 54) {
  clothingSuggestion2 = ("a coat")
}

if (tempFahr > 53 && tempFahr <= 69) {
  clothingSuggestion2 = ("a jacket")
}

else if (tempFahr >= 70) {
  clothingSuggestion2 = ("no jacket")
}

var result = "Since it is " +  tempFahr + " degrees and you are going to a " +  eventType + " event you should wear " + clothingSuggestion1 + " and " + clothingSuggestion2 + ".";


console.log(result);