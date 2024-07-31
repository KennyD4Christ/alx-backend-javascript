// Define interfaces
interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Define functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major'
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor'
  };
}

// Example usage
const subjectA: MajorCredits = { credits: 5, brand: 'major' };
const subjectB: MajorCredits = { credits: 3, brand: 'major' };

const majorResult = sumMajorCredits(subjectA, subjectB);
console.log('Major Credits:', majorResult); // { credits: 8, brand: 'major' }

const subjectX: MinorCredits = { credits: 2, brand: 'minor' };
const subjectY: MinorCredits = { credits: 4, brand: 'minor' };

const minorResult = sumMinorCredits(subjectX, subjectY);
console.log('Minor Credits:', minorResult); // { credits: 6, brand: 'minor' }
