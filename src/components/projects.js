import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0};
	}
   
   	
	toggleCategories() {
		
	  if(this.state.activeTab === 0){
		return(
			<div><h1> This is Selenium</h1></div>
		)
	  } else if(this.state.activeTab === 1) {
	  	return (
	  		<div><h1> This is TestNG</h1></div>
	  	)
	  } else if(this.state.activeTab === 2) {
	  	return (
	  		<div><h1> This is Cucumber</h1></div>
	  	)
	  } else if(this.state.activeTab === 3) {
	  	return (
	  		<div><h1> This is React</h1></div>
	  	)
	  }

	}
	
	
	render () {
		return (
		<div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Selenium</Tab>
          <Tab>TestNG</Tab>
          <Tab>Cucumber</Tab>
          <Tab>React</Tab>
        </Tabs>

        <section className="Projects-grid">
          <Grid className="Projects-grid">
            <Cell col={12}>
              <div className="content">
              {this.toggleCategories()}
              </div> 
            </Cell>
      	  </Grid> 
       	</section>
        </div>
		)
	}
}

export default Projects; 