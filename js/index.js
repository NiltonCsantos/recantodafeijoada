
const h3=document.getElementById("title-cover-content");

function write(text, count){

  if(count<text.length){

    setTimeout(()=>{

      h3.textContent+=text.charAt(count);
      count++;

      write(text, count)

    },100)

  }else{
    h3.textContent="";
    write("A melhor feijoada do Estado",0);
  }

}

write("A melhor feijoada do Estado",0);