function clickYes() {
  alert("semangat nggun");
  alert("aku yakin dirimu pasti iso");
  alert("ojo lali berterimakasih nang diri sendiri juga");
  alert("dirimu wes berusaha selama iki, dirimu wes hebat banget");
  alert(
    "mungkin dirimu merasa capek, mangkel, nesu, tapi keselmu pasti menghasilkan sesuatu sing indah diwaktunya"
  );
  alert("ojo lali istirahat, kesehatan e lo dijaga hahaha");
  alert("berjuang iku apik, iku hebat banget, keren banget");
  alert('selalu sayangi diri sendiri ya "always love your self"');
  alert("ntahlah tulisanku bener opo ndak wkwkwk");
  alert("semoga apa sing kok aminkan tersemogakan");
  alert("apa pun itu pilihan mu tetap minumya teh botol sosro");
  alert("haha nggak-nggak guyon");
  alert(
    "apapun pilihan yang kau pilih itu yang pasti yang terbaik untuk dirimu "
  );
  alert("allah pun pasti tahu apa yang sedang di usahakan oleh hambanya");
  window.open("https://www.youtube.com/watch?v=5g2Kzwjenrc");
}

function clickNo() {
  window.open("https://www.youtube.com/watch?v=5g2Kzwjenrc");
}

var audioPlaying = false;
function music() {
  var audio = document.getElementById("BgMusic");
  if (audioPlaying) audio.pause();
  else audio.play();
  audioPlaying = !audioPlaying;
}
