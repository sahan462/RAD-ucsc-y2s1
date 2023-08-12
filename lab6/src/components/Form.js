function Form(){

    function getalert(){
       alert(document.getElementById("inp1").value);
    }

    return(
     <div>
         <label>Enter Input: <input type="text" id="inp1"/></label>
         <button onClick={getalert}>Submit</button>
     </div>
    )
}
export default Form;