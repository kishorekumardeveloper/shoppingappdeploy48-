export class Product {
    id:number;
    name:string;
    description:string;
    price:number;
    imageUrl:string;


    constructor(id:number, name:string, description ='', price = 0,imageUrl ='https://thumbs.dreamstime.com/b/colorful-rubic-super-vivid-color-45894180.jpg'){
        this.id = id
        this.name =name
        this.description = description
        this.price =price
        this.imageUrl = imageUrl
    }
}
