

const Hello = () => {
let name = 'James';

//if(name)
  return (
     <div>
      {name==='James'? <h1>Hello {name}</h1>:<h1>Hello World</h1>} 
    </div>

  ) 
  
//   return(
//     <div>
//         hello world
//     </div>
//   )
}

export default Hello