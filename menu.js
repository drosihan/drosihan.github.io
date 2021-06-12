<script>
   var menu_items = document.getElementById("menu_items");
   menu_items.style.maxHeight = "0px";
   function menutoggle(){
       if (menu_items.style.maxHeight == "0px"){
           menu_items.style.maxHeight = "20px";
       }
       else{
           menu_items.style.maxHeight = "0px";
       }
   }
</script>