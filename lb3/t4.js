`use strict`;

function inspectObj(obj) {
    
    let result = [];
    
    for (let key in obj) {
        
        if (typeof obj[key] === 'function') { // чи є поточне значення функцією
            
            let argumentCount = obj[key].length; // length - кількість аргументів
            
            // додали масив в результат
            result.push([key, argumentCount]);
        }
    }
    
    
    return result;
}


const testObj = {
    m1: x => [x], // функція з одним аргументом
    m2: function (x, y) { // з двома
        return [x, y];
    },
    m3(x, y, z) {  // з трьома
        return [x, y, z];
    },
    notFunction: "рядок", // не потрапляє до масиву (не функція)
    numberValue: 123 // не потрапляє, теж не функція
};

console.log(inspectObj(testObj)); 
