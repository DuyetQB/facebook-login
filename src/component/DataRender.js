
import React, { Fragment } from "react";
export default class DataRender extends React.Component{


    getitem(){
        let api = "https://5fc3323b9210060016869f8a.mockapi.io/api/flower-v1/user";
        fetch(api)
        .then(response =>{
            let data =response.json();

            return data;
        })
        .then(data=>{
             console.log(data);

        })
        .then(function(data){
            getdata(data);
        })

       function getdata(data) {


        {data.map((element,index)=>{
            console.log(element,index);
           return <div>
                    
<img className="data__image1" alt="" src={element.avatar}/>
<h1 className="data__user1">{element.name}</h1>
<h1 className="data__text1">{element.avatar}</h1>
<h2 className="data__password1">{element.password}</h2>
<p className="data__title1">{element.text}</p>
           </div>
          
       })}
      
        }
    }
    render(){
       

        return(
    <Fragment>
<div className ="container">
<div className ="row data__item">
<div className ="col-md-6 data__item--content">
    
    <img className="data__image" alt=""/>
    <h1 className="data__user"></h1>
    <h1 className="data__text"></h1>
    <h2 className="data__password"></h2>
    <p className="data__title"></p>
    </div>
    </div>
    <div className ="row data__item">
       <div className ="col-md-6 data__item--content data__item--content--seconds">
           {this.getitem}
        </div>
 </div>
</div>
    </Fragment>


        )
    }
}