const WHATSAPP_NUMBER="919624695831"; // replace with your real number
const wa=document.getElementById("whatsapp");
wa.href=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Pixelora, I'd like to discuss a website project.")}`;
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
