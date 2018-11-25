import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
	render () {
		return (
		<div style={{width: '100%', margin: 'auto'}}> 
		  <Grid className="landing-grid">
		    <Cell col={12}>
		  	  <img
		  	    src="https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user-512.png"
		  	    alt="avatar"
		  	    className="avatar-img"
		  	  />
		  	
		  	  <div className="banner-text">
		  	  <h1> QA Engineer </h1>
		  	  <hr/>

		  	  <p>Java | Selenium | TestNG | Cucumber | HTML/CSS | Bootstrap | React | React Native | Material UI</p> 

		  	  <div className="social-links">
		  	    
				{/* LinkedIn */}
		  	    <a href="http://google.com" rel="noopener noreferrer"  target="_blank"> 
		  	    <i className="fa fa-linkedin-square" aria-hidden="true" />
		  	    </a>

				{/* Github */}
		  	    <a href="http://google.com" rel="noopener noreferrer"  target="_blank"> 
		  	    <i className="fa fa-github-square" aria-hidden="true" />
		  	    </a>

		  	    </div>
		  	  </div>
		  	</Cell>
		  </Grid>
		</div>
		)
	}
}

export default Landing; 