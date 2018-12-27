import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0};
	}
   
   	togglecategories () {
		if(this.state.activeTab === 0) {
		return(
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
        </div>
		)
	}
}

export default Projects; 