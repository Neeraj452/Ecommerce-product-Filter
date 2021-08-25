import React,{useEffect,useState} from 'react'
import Novbar from './componets/Novbar';
import "./App.css";

let object
const  App = ()=> {

  const [users,setUsers] =  useState([])
  const [brand,setbrand] = useState("")
  const getApi = async()=>{
    const respose = await fetch('https://demo7242716.mockable.io/products');
    object =(await respose.json());
    console.log(object);
    setUsers(object["products"]);
   
    console.log("hello Neeraj welcome");
  }
  
  
  const GenderChange = (e) =>{
   
    const gender = e.target.value;
   const updatedgender = object["products"].filter((curElen) =>{
     return curElen.gender === gender;

   });
   setUsers(updatedgender);
  }

  let array = []
  const checkboxChange =(e)=>{
    
    const checkbox = e.target.value;
    array.push(checkbox)
    const leng = array.length
    console.log(array);
    console.log(leng);
    const updateCheckbox = object["products"].filter((curElen) =>{
      return array.includes(curElen.category);
      
    });
    

  setUsers(updateCheckbox);
  }
  // const checkboxBrand =(e)=>{
    
  //   const checkbox = e.target.value;
  //   array.push(checkbox)
  //   const leng = array.length
  //   console.log(array);
  //   console.log(leng);
  //   const updateCheckbox = object["products"].filter((curElen) =>{
  //     return array.includes(curElen.brand);
  //   });
    

  const checkboxBrand =(e)=>{
    
    const checkbox = e.target.value;
    array.push(checkbox)
    const leng = array.length
    console.log(array);
    console.log(leng);
    const updateCheckbox = users.filter((curElen) =>{
      return array.includes(curElen.brand);
    });
    

  setbrand(updateCheckbox);
  }
  const filter1 = () =>{
   
    const updateCheckbox = object["products"].filter((curElen) =>{
      return array.includes(curElen.category);
      
    });
    setUsers(updateCheckbox);
  }
  


useEffect( ()=>{
  getApi();
},[])
  return (
    <>
  <Novbar/>  

<p className="inline m">Home</p> <h6 className="inline">/Black</h6><br/>
<h6 className="inline m">Black-</h6> <p className="inline ">119139 Item</p><br/>

<button type ="button" className="m btn btn-success mr-auto" onClick = {filter1}>FILTERS</button> 
    <div className="container-fluid ">
    <div className="row">
   <div className="col-2 border">
     <div className="radioborder mt-3">
     <input type ="radio" value="Men" name="fav_language" onChange={GenderChange} /><label className="m">Men</label><br/>
     <input type ="radio" value="Women" name="fav_language" onChange={GenderChange} /><label className="m">Women</label><br/>
     <input type ="radio" value="Boys" name="fav_language" onChange={GenderChange} /><label className="m">Boys</label><br/>
     <input type ="radio" value="Girls" name="fav_language" onChange={GenderChange} /><label className="m">Girls</label><br/>
     </div>
     <div className = "mt-3">
      <h6 className = "inline ">BRAND</h6> <i class="fas fa-search right "></i>
    
      <div className="radioborder1">
      <input type="checkbox" value="Puma" id="Puma" onChange ={checkboxBrand} /> <label className="m">Puma</label><br/>
      <input type="checkbox" value="Macmerise" id="Macmerise" onChange ={checkboxBrand} /> <label className="m">Macmerise</label><br/>
      <input type="checkbox" value="Roadster" id="Roadster" onChange ={checkboxBrand} /> <label className="m">Roadster</label><br/>
      <input type="checkbox" value="H&M" id="H&M" onChange ={checkboxBrand} /> <label className="m">H&M</label><br/>
      <input type="checkbox" value="DressBerry" id="DressBerry" onChange ={checkboxBrand}/> <label className="m">DressBerry</label><br/>
      <input type="checkbox" value="HERE&NOW" id="HERE&NOW" onChange ={checkboxBrand}/> <label className="m">HERE&NOW</label><br/>
      <input type="checkbox" value="DOROTHY PERKINS" id="DOROTHY PERKINS" onChange ={checkboxBrand} /> <label className="m">DOROTHY PERKINS</label><br/>
      <input type="checkbox" value="max" id="max" onChange ={checkboxBrand}/> <label className="m">max</label><br/>
      <p className = "text-danger">+2559</p>
      </div>
     </div>

     <div className = "mt-3">
      <h6 className = "inline ">CATEGORIES</h6> <i class="fas fa-search right "></i>
      <div className="radioborder1">
      <input type="checkbox" value="Tshirts" id="Tshirts" onClick ={checkboxChange}/> <label className="m">Tshirts</label><br/>
      <input type="checkbox" value="Tops" id="Tops" onClick ={checkboxChange}/> <label className="m">Tops</label><br/>
      <input type="checkbox" value="Dresses" id="Dresses" onClick ={checkboxChange}/> <label className="m">Dresses</label><br/>
      <input type="checkbox" value="Casual Shoes" id="Casual Shoes" onClick ={checkboxChange} /> <label className="m">Casual Shoes</label><br/>
      <input type="checkbox" value="Shirts" id="Shirts" onClick ={checkboxChange}/> <label className="m">Shirts</label><br/>
      <input type="checkbox" value="Heels" id="Heels" onChange ={checkboxChange}/> <label className="m">Heels</label><br/>
      <input type="checkbox" value="Trousers" id="Trousers" onChange ={checkboxChange}/> <label className="m">Trousers</label><br/>
      <input type="checkbox" value="Jeans" id="Jeans" onChange ={checkboxChange}/> <label className="m">Jeans</label><br/>
      <p className = "text-danger">+277</p>
      </div>
      </div>
   </div>
         <div className="col-10  border"> 
         <div className = "container-fluid">
         <div className="row">
            {
          users.map((curElem) =>{
          const {brand,additionalInfo	,searchImage,price,mrp,discountDisplayLabel} = curElem;
          return(
            <div className = "col-12 col-lg-3 col-md-4 col-sm-12">
            <div className="card mt-3 cards1">
              
                     <img src={searchImage} alt="neeraj img" className = "rounded img-responsive card-img-top" width="250" height="150"/>
                           <div className= "card-body"> 
                           <h4 className = "acard-text"> {brand	}</h4>
                           <p className = "acard-text"> {additionalInfo	}</p>
                           <div className="inline">
                           <i class="fas fa-rupee-sign inline"></i>
                           <p className = "acard-text inline m"> {price}</p>
                           <p className = "acard-text inline m del"> {mrp}</p>
                           <p className = "acard-text inline m off"> {discountDisplayLabel}</p>
                           </div>
                           </div>
                           
                     </div>
                  </div>  
              
             
                  
                      )
                })  
            }
            </div>
     
                  </div>
           </div>
           </div>
           </div>
          
        </>
    
  )
}

export default App