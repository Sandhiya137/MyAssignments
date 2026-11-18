let productDetails:{
productID: number,
productName: string,
isAvailable?:boolean
} = {
productID: 200,
productName: "laptop",
isAvailable:true
};

productDetails.productName="keyboard";

console.log(productDetails.productName);