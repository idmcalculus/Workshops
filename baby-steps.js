let args = process.argv
args = args.slice(2)
let sumArgs = args.reduce((acc, curr) => acc + Number(curr), 0);
/* let sumArgs = 0
for (let i = 2; i < args.length; i++) {
  sumArgs += Number(args[i])
} */
console.log(sumArgs);