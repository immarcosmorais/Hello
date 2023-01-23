function bigger(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

function smaller(a, b) {
  return a < b ? a : b;
}

function formattMonth(month) {
  switch (mes) {
    case 1:
      return "Janeiro";
    case 2:
      return "Feveiro";
    case 3:
      return "Marco";
    default:
      return "Nao implementei ainda";
  }
}
