function nbYear(p0, percent, aug, p) {
    // your code
    let year = 0;
    while (p0 < p) {
      p0 = p0 + p0 * (percent/100) + aug;
    //   console.log(p0)
      p0 = Math.floor(p0);
    //   console.log(p0)
      year++;
    //   console.log(year, p0)
}
  return year;
}

let check = nbYear(1500, 5, 100, 5000)
console.log(check);