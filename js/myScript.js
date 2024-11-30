/* ------ After Link Click Toogle Button Expland Close ------ */
function closeNavbar() {
    const navbarCollapse = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
    });
    bsCollapse.hide();
}

/* ------ Add animation to page reload ------ */
let opa = 0;
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
  
    setTimeout(() => {
      preloader.style.display = 'none';

      content.classList.remove('hidden');     
    }, 2000); 
}); 


/* ------ Download cv ------ */
const btnDownload = document.getElementById('downloadBtn');
btnDownload.addEventListener('click', function(){
    let filrUrl = "cv/R.D.I.C.K Wickramathilaka CV.pdf";
    const link = document.createElement('a');
    link.href = filrUrl;
    link.download = "R.D.I.C.K Wickramathilaka CV.pdf";

    link.click();
    
    console.log("Hello")
});