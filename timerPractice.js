const drums = new HTMLUnknownElement({

});

let timeout;
let totalTime = 0;
function startTest() {
  console.log('Started!');
  const startTime = Date.now();

const round = () => {
  timeout = setTimeout(() => {
  totalTime += 1000;
  let elapsedTime = Date.now() - startTime;
  console.log('total drift', elapsedTime - totalTime);
}, 1000);
}
  round();
}

