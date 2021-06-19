function toggle() {
  var idListEn = ["english"];
  var idListCn = ["chinese"];
  var item;
  for (var i = 0; i < idListEn.length; i++) {
    item = document.getElementById(idListEn[i]);
    if (item.style.display === 'none') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }

  for (var i = 0; i < idListCn.length; i++) {
    item = document.getElementById(idListCn[i]);
    if (item.style.display === 'block') {
      item.style.display = 'none';
    } else {
      item.style.display = 'block';
    }
  }
}
