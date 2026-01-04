const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar_menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');

});
const links = menu.quaryselectorALL('a');
 links.forEach(link =>{links.addEventlistener('click',(e) =>{e.stopPropagation();
                                                            });
                      });
