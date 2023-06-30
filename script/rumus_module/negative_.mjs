// IF DISKRIMINAN NEGATIVE
export function negative(a , b , c , printFunct) {
    //VARIABLE DEFINED
    const diskriminan = (b * b) - (4 * a * c);
    // DESC FRIST
    const text1 = `<p>Untuk mencari akar akar persamaan kuadrat kita harus menentukan a , b dan c</p>`
    const text2 = `<p>Bentuk umum persamaan kuadrat adalah ax2 + bx + c = 0 atau ax2 + bx = -c</p>`
    const text3 = `<p>Maka dari itu dapat ditentukan a = ${a} , b = ${b} dan c = ${c}</p>`;
    // COUNT
    const count1 = `<p>Rumus diskriminan adalah b × b - 4 × a × c`
    const count2 = `<p>Diskriminan dari ${a}x2 + ${b}x + ${c} = 0 Adalah = ${diskriminan}</p>`
    // RESULT
    const result1 = `<p>Diskriminan negative maka akar-akarnya adalah tidak real atau imajiner</p>`
    const result2 = `<p>Diskriminan = ${diskriminan}</p>`
    const gatheringText = [
        text1 , text2 , text3 , 
        count1 , count2,
        result1 , result2
    ]
    printFunct(gatheringText)
};