import React, { Component } from "react";

// không chỉ có props truyền vào mới chạy
const Person=(per)=>{
    return (
        <div>
            <p>This is {per.name}. I'm {per.age} years old</p>
            <p>{per.children}</p>
        </div>          
    ) 
};

// Kiểu cũ này phải dùng this  và bắt buộc là props ms đc
// class Person extends Component{
//     render(){
//         return (
//             <p>This is {this.props.name}. I'm {this.props.age} years old </p>
//         );
//     }
// }
export default Person;