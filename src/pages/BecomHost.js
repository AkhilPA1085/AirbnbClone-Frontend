





function BecomHost() {
  


    return (
    <div>
      <div
        className="col-sm-4 shadow rounded g-5"
        style={{ margin: "0 auto", padding: "45px" }}
      >
        <h1 className="text-center pt-3 text-secondary h2">Become Host</h1>
        <form >
          <div className="form-group">
            <label className="col-form-label">Place Name</label>
            <input 
              name="name" type="text"
              className="form-control" 
             />
           
          </div>
         
          <div className="form-group">
            <label className="col-form-label">Description</label>
            <input
              name="description" type="text"
              className="form-control" />
           
          </div>
          
          <input
          type="submit"
          className="btn btn-secondary my-3"
          value="Become Host"
        />
          
        </form>
      </div>

     <div className="container">
       <div className="row">
    
         
         </div>
       </div>
      
  </div>




  );
}

export default BecomHost;
