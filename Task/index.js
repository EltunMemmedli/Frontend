let pcBrands = [
    ["Macbook pro 14", 14, 1000],
    ["Asus zenbook", 15.6, 2000],
    ["Acer Swfit 7", 14, 3000]
];

console.log("Brands:")


for(let i = 0; i<pcBrands.length; i++){
  
    for(let k=0; k<pcBrands[i].length; k++){
    
       let name = pcBrands[i][0]
       let inch = pcBrands[i][1]
       let price = pcBrands[i][2]


       let fullname = `Name: ${name}, Inch: ${inch}, Price: ${price}`;
       console.log(fullname);

    }
}

