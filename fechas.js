/**
 * Crea un archivo llamado fechas.js que contenga las siguientes líneas
 *
 * - [X] La fecha de hoy
 * - [X] La fecha de tu nacimiento
 * - [X] Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
 * - [X] Una variable que contenga el día de tu nacimiento
 * - [X] Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
 * - [X] Una variable que contenga el año de tu nacimiento (con 4 dígitos)
 */

const hoy =new Date();
console.log(hoy.toLocaleDateString('es-ES'));

// 21/07/1973
const fechaCumple = new Date(1973, 6, 21);
console.log(fechaCumple.toLocaleDateString('es-ES'));

const hoyMasTardeQueCumple = hoy > fechaCumple;
console.log(hoyMasTardeQueCumple);

const diaNacimiento = fechaCumple.getDate();
console.log(diaNacimiento);

const mesNacimento = fechaCumple.getMonth() + 1;
console.log(mesNacimento);

const anioNacimiento = fechaCumple.getFullYear();
console.log(anioNacimiento);
