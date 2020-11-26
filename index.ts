/**
 * ============================
 *
 * SKIMMIA Backend Challenge REFACTOR
 * 'skimmia-backend-challenge' refactor.
 * Se reduce complejidad del codigo. Se eliminan capas de responsabilidad de código, 'class' y 'custom types'.",
 *
 * ============================
 * fvvelasquez, this.fvvelasquez@gmail.com (Nov 26, 2020)
 * uses: 'nodejs', 'javascript', 'typescript'
 *
 *
 *
 * REQUIREMENT:
 * ----------------------------
 * Write a program that prints all the numbers from 1 to 100.
 *
 * CONDITIONS:
 * ----------------------------
 * 1. If number is multiple of 3:
 *      Print "Music" instead of number.
 *
 * 2. If number is multiple of 5:
 *      Print "TI" instead of number.
 *
 * 3. If number is both, condition 1 and condition 2:
 *      Print "Musical".
 *
 * CONSTRAINTS:
 * ----------------------------
 * i. Only one 'if' can be used.
 *    No multiple branches, ternary operators or 'else', 'else if'.
 *
 */

// ----------------------------

// We push in the 'countList' all the numbers of the count.
function countNumbers(): void {
	for (let counter = INITS_AT; counter <= ENDS_AT; counter++) {
		countList.push(counter);
	}
}
// ----------------------------

// We fill in the countList with the 'multiplesOf' SpecialPrints
// We return a list of all the 'multiplesOf'
function countMultiplesOf(
	specialPrint: string,
	MULTIPLE_OF: number
): Array<number> {
	// ----------------------------
	let multiplesOf: Array<number> = [];
	let multiple: number;
	let i: number;
	// ----------------------------
	for (
		multiple = MULTIPLE_OF, i = 1;
		multiple <= ENDS_AT;
		multiple = MULTIPLE_OF * ++i
	) {
		// Write the 'specialPrint' value instead of the 'multiple' number value.
		countList[multiple - 1] = specialPrint;
		// ----------------------------
		// We push the current 'multiple'.
		multiplesOf.push(multiple);
		// ----------------------------
	}
	// Array of all 'multiple' values of MULTIPLE_OF.
	return multiplesOf;
	// ----------------------------
}
// ----------------------------

// We fill in the countList with the 'multipleOf_BOTH' SpecialPrints
function countMultiplesOfBoth(
	specialPrint: string,
	multiplesOf_A: Array<number>,
	multiplesOf_B: Array<number>
): void {
	// ----------------------------
	let multiple: number;
	let i, j: number;
	// ----------------------------

	// We provoke the Intersection of sets multiplesOf_A and multiplesOf_B:
	for (i = 0; i < multiplesOf_A.length; i++) {
		for (j = 0; j < multiplesOf_B.length; j++) {
			// *************************************************
			// If Intersection occurs:
			if (multiplesOf_A[i] === multiplesOf_B[j]) {
				// *********************************************
				// current 'multiple' value.
				multiple = multiplesOf_A[i];
				// ----------------------------
				// Write the 'specialPrint' value instead of the 'multiple' number value.
				countList[multiple - 1] = specialPrint;
				// ----------------------------
			}
		}
	}
}
// ----------------------------
// PRINT RESULTS !
function printCount() {
	for (let i = 0; i < countList.length; i++) {
		console.log(countList[i]);
	}
}
// ----------------------------

// ============================ ============================ ============================
// ============================ ============================ ============================

// LET'S COUNT! ..
// ----------------------------
// Count from 1 to 100
const INITS_AT: number = 1;
const ENDS_AT: number = 100;
let countList: Array<string | number> = [];
// ----------------------------

// Llenamos'countList' con números del 1 al 100.
countNumbers();
// ----------------------------

// Insertamos "Music" en lugar de cada multiplo de 3.
const mOf_3 = countMultiplesOf("Music", 3);
// ----------------------------

// Insertamos "TI" en lugar de cada multiplo de 5.
const mOf_5 = countMultiplesOf("TI", 5);
// ----------------------------

// Insertamos "Musical" en lugar de cada multiplo de ambos, 3 AND 5.
countMultiplesOfBoth("Musical", mOf_3, mOf_5);
// ----------------------------

// Mostramos el resultado:
printCount();
// ----------------------------

// ============================ ============================ ============================
// ============================ ============================ ============================
