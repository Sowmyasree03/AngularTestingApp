import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products:product[]=[{
    productTitle:"Technology-1",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor nunc, imperdiet a dictum eget, dictum sit amet neque. Vestibulum viverra, leo eu ornare sodales, neque diam luctus dui, vitae sodales est leo nec velit. In diam felis, sagittis sed augue quis, sollicitudin pretium nisi",
    productImage:"https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg"
  },{
    productTitle:"Technology-2",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor nunc, imperdiet a dictum eget, dictum sit amet neque. Vestibulum viverra, leo eu ornare sodales, neque diam luctus dui, vitae sodales est leo nec velit. In diam felis, sagittis sed augue quis, sollicitudin pretium nisi",
    productImage:"https://apicms.thestar.com.my/uploads/images/2020/08/24/831125.jpg"
  },{
    productTitle:"Technology-3",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor nunc, imperdiet a dictum eget, dictum sit amet neque. Vestibulum viverra, leo eu ornare sodales, neque diam luctus dui, vitae sodales est leo nec velit. In diam felis, sagittis sed augue quis, sollicitudin pretium nisi",
    productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
  },{
    productTitle:"Technology-4",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor nunc, imperdiet a dictum eget, dictum sit amet neque. Vestibulum viverra, leo eu ornare sodales, neque diam luctus dui, vitae sodales est leo nec velit. In diam felis, sagittis sed augue quis, sollicitudin pretium nisi",
    productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
  },{
    productTitle:"Technology-5",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor nunc, imperdiet a dictum eget, dictum sit amet neque. Vestibulum viverra, leo eu ornare sodales, neque diam luctus dui, vitae sodales est leo nec velit. In diam felis, sagittis sed augue quis, sollicitudin pretium nisi",
    productImage:"https://wallpaperaccess.com/full/4755970.jpg"
  },{
    productTitle:"Technology-6",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor nunc, imperdiet a dictum eget, dictum sit amet neque. Vestibulum viverra, leo eu ornare sodales, neque diam luctus dui, vitae sodales est leo nec velit. In diam felis, sagittis sed augue quis, sollicitudin pretium nisi",
    productImage:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5577975.jpg"
  },{
    productTitle:"Technology-7",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor nunc, imperdiet a dictum eget, dictum sit amet neque. Vestibulum viverra, leo eu ornare sodales, neque diam luctus dui, vitae sodales est leo nec velit. In diam felis, sagittis sed augue quis, sollicitudin pretium nisi",
    productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhXsW-af4Jfq6BE9f944Hrl1gGijKV4knewAAOM5iskMQ0zxCv6lshRAfz2QGAvPw46U&usqp=CAU"
  },{
    productTitle:"Technology-8",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor nunc, imperdiet a dictum eget, dictum sit amet neque. Vestibulum viverra, leo eu ornare sodales, neque diam luctus dui, vitae sodales est leo nec velit. In diam felis, sagittis sed augue quis, sollicitudin pretium nisi",
    productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kHSGXV5Su4zwnb22eb1HRpRhAKbsTDUtvEkEBEDsCVsajhEzA602NvIQlpBzNo-Fsko&usqp=CAU"
  }];
  productCount:number=0;
  productSendByChild:string[]=[];
  getProductDetailsFromChild(productTitle:string){
    console.log(productTitle)
    this.productSendByChild.push(productTitle);
    this.productCount++;
  }
}