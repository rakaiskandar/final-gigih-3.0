export default function rupiahConverter(number) {
    const tempNumber = number;
    const format = tempNumber?.toString().split("").reverse().join("");
    const convert = format?.match(/\d{1,3}/g);
    const rupiah = "Rp " + convert?.join(".").split("").reverse().join("");
    return rupiah;
}