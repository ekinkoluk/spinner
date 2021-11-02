

let array = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|  ',"\n" ];
let delay = 100;
for (const arr of array){
  setTimeout(() => {
    process.stdout.write(arr)
  }, delay);
  delay += 200;
}