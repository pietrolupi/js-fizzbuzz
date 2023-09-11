const container = document.querySelector('.fizzbuzz');

for(let i = 0; i < 100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  container.append(box);

  if(!((i + 1) % 3) && !((i + 1) % 5)){
    box.classList.add('bg-red');
    box.append('fizzbuzz');
  }else if(!((i + 1) % 5)){
    box.classList.add('bg-yellow');
    box.append('buzz');
  }else if( !((i + 1) % 3 )){
    box.classList.add('bg-green');
    box.append('fizz');
}else{
    box.classList.add('bg-blu');
    box.append(i + 1);
}

};
