// coding challeng 1 and 2
let MarkHeight = 1.88;
let MarkMass = 95;
let JohnHeight = 1.76;
let JohnMass = 85;
let MarkBMI = MarkMass / MarkHeight ** 2;
let JohnBMI = JohnMass / JohnHeight ** 2;
// const markHigherBMI = MarkBMI > JohnBMI? true : false; method 1
// const markHigherBMI = MarkBMI > JohnBMI? "Mark's BMI is higher than John's!" : "John's BMI is higher than Mark's!"; method 2
let markHigherBMI; // method 3
if (MarkBMI > JohnBMI) {
  markHigherBMI=`Mark's BMI ${MarkBMI} is higher than John's BMI ${JohnBMI}`;
} else {
  markHigherBMI=`John's BMI ${JohnBMI} is higher than Mark's BMI ${MarkBMI}`;
}
console.log(markHigherBMI)


//coding challenge 3
let DolphinsScore = [96, 108, 89];
let KoalasScore = [88, 91, 110];

let TotalDolphinsScore = 0;
for (let i = 0; i<DolphinsScore.length; i++){
    TotalDolphinsScore += DolphinsScore[i];
}
let AverageDolphinsScore = TotalDolphinsScore / DolphinsScore.length;
let TotalKoalasScore = 0;
for (let i = 0; i<KoalasScore.length; i++){
    TotalKoalasScore += KoalasScore[i];
}
let AverageKoalasScore = TotalKoalasScore / KoalasScore.length;

if (AverageDolphinsScore > AverageKoalasScore && AverageDolphinsScore >= 100) {
    console.log(`Dolphins win with an average score of ${AverageDolphinsScore}`);
} else if (AverageKoalasScore > AverageDolphinsScore && AverageKoalasScore >= 100) {
    console.log(`Koalas win with an average score of ${AverageKoalasScore}`);
} else if (AverageDolphinsScore === AverageKoalasScore && AverageDolphinsScore >= 100) {
    console.log(`It's a draw with both teams scoring an average of ${AverageDolphinsScore}`);
}else{
    console.log(`No team wins`);
}



//coding challenge 4
let billValue = 275;
const tip = billValue > 50 && billValue < 300 ? billValue * 0.15 : billValue * 0.2;
console.log(`The bill value is ${billValue} , tip is ${tip} and the total value is ${billValue + tip}`)