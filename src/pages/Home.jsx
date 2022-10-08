import React from 'react'


function Home({ submit,handleSort, }) {
 
	const [formData, setFormData] = React.useState({})
	function handleChange(event) {
	  setFormData({
		...formData,[event.target.name]:event.target.value
	  })
	}
  
	function getSubmitData(e) {
	  e.preventDefault();
	  submit(formData)
	}
	return (
	  <div className="ui segment">
		<form className="ui form" >
		  <div className="inline fields">
		
			<input type="text" name="charge" placeholder="Charge" onBlur={handleChange} />
			
			<input type="number" name="amount" placeholder="Amount" step="0.01" onBlur={handleChange} />
		  </div>
		  <button className="ui button" type="submit" onClick={getSubmitData}>
			submit
		  </button>
		  <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h4 className="ui center aligned header" onClick={handleSort}>charge</h4>
          </th>
          <th>
            <h4 className="ui center aligned header">Amount</h4>
          </th>
        </tr>
     
       
      </tbody>
    </table>

		</form>
	  </div>
	);
  }
  


export default Home;