function timeOfDay() {
  var today = new Date();
  var hour = today.getHours();
  var color;

  switch (hour) {
    case 0:
      color = "#660000";
      break;

    case 1:
      color = "#CC0000";
      break;

    case 2:
      color = "#CC3300";
      break;

    case 3:
      color = "#CC6600";
      break;

    case 4:
      color = "#CC9900";
      break;

    case 5:
      color = "#CCCC00";
      break;

    case 6:
      color = "#CCFF00";
      break;

    case 7:
      color = "#CCFF33";
      break;

    case 8:
      color = "#CCFF66";
      break;

    case 9:
      color = "#CCFF99";
      break;

    case 10:
      color = "#CCFFCC";
      break;

    case 11:
      color = "#CCFFFF";
      break;

    case 12:
      color = "#FFFFFF";
      break;

    case 13:
      color = "#FFFFCC";
      break;

    case 14:
      color = "#FFFF99";
      break;

    case 15:
      color = "#FFFF66";
      break;

    case 16:
      color = "#FFFF33";
      break;

    case 17:
      color = "#FFFF00";
      break;

    case 18:
      color = "#FFCC00";
      break;

    case 19:
      color = "#FF9900";
      break;

    case 20:
      color = "#FF6600";
      break;

    case 21:
      color = "#FF3300";
      break;

    case 22:
      color = "#FF0000";
      break;

    case 23:
      color = "#990000";
      break;
  }
  document.getElementById("container").style.background = color;
}
