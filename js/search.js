function DoKWSearch(SiteSrchURL) {
  var SearchString = document.getElementById('textboxTerm').value;
  if (SearchString != '') {
    var Idx = document.getElementById('DDSearchBy')[document.getElementById('DDSearchBy').selectedIndex].value;
    var StrURL = SiteSrchURL + '&type=Keyword&limit=TOM=*&sort=RELEVENCE&Page=0&by=' + Idx + '&term=' + SearchString;
    window.open(StrURL);
  }
}
