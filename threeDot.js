const ages = [11,14,16,13,17];
const ages2 = [15,16,12];
const ages3 = [25,19,22];
// const allAges =ages.concat(ages2).concat(ages3);
const allAges2 =  [...ages, ...ages2, 5, ...ages3]; /** ...(three dot) */
// console.log(allAges2); 
const business = 650;
const minister = 450;
const shocib = 250;
const takaPoysha= [ 650, 450, 250]
// const maximum = Math.max(business,minister,shocib);
const maximum= Math.max(...takaPoysha); /** three dot */
console.log(maximum)