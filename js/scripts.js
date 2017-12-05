$(document).ready(function(){
  $("#stress").submit(function(){
    event.preventDefault();
    var signs = 0;
    var sympt = 0;
    var cope = 0;

    $("input:checkbox[name=warnings]:checked").each(function(){
      signs += 1
    });
    $("input:checkbox[name=symptoms]:checked").each(function(){
      sympt+=1
    });
    $("input:checkbox[name=coping]:checked").each(function(){
      cope+=1
    });

    if (signs >= 4 && sympt >= 3){
      alert("Holy Shit You're Stressed!")
    } else if (signs >= 4 && cope >= 2) {
      alert("You're Doing Good")
    } else {
      alert("Congrats, you're not stressed!")
    }

  });
});
