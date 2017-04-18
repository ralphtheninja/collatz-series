function collatz (n) {
  if (isNaN(n)) throw new Error('n must be a number')
  if (n < 1) throw new Error('n must greater than or equal to one')
  var series = []
  var i = n
  while (true) {
    series.push(i)
    // Assuming collatz conjecture is true ;)
    if (i === 1) break
    i = next(i)
  }
  return series
}

function next (n) {
  return (n % 2 === 0 ? n / 2 : n * 3 + 1)
}

module.exports = collatz

if (!module.parent) {
  const N = Number(process.argv.slice(2)[0])
  console.log('N', N)
  console.log('series', collatz(N))
}
