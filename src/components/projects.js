import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0};
	}
   
   	
	toggleCategories() {
		
	  if(this.state.activeTab === 0){
		return(
			
			<div className="projects-grid">
      {/* Project 1 */}
		 	<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.seleniumhq.org/images/big-logo.png) center / cover'}}>Selenium Project #1</CardTitle>
			  <CardText>
			  Lorem Ipsum is simply dummy text of the printing and typesetting industry 
			  </CardText>
			  <CardActions border>
			    <Button coloured>Github</Button>
			    <Button coloured>CodePen</Button>
			    <Button coloured>LiveDemo</Button>
			  </CardActions>
			    <CardMenu style={{color: '#fff'}}>
			      <IconButton name="share" />
			    </CardMenu>
			</Card>  

    {/* Project 2 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://1.bp.blogspot.com/-aXHbB9nPPeI/VUZUwaKi8TI/AAAAAAAAAr0/yiXtd5WALPo/s1600/cucumber.png) center / cover'}}>Selenium Project #2</CardTitle>
        <CardText>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry 
        </CardText>
        <CardActions border>
          <Button coloured>Github</Button>
          <Button coloured>CodePen</Button>
          <Button coloured>LiveDemo</Button>
        </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
      </Card> 

    {/* Project 3 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.seleniumhq.org/images/big-logo.png) center / cover'}}>Selenium Project #3</CardTitle>
        <CardText>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry 
        </CardText>
        <CardActions border>
          <Button coloured>Github</Button>
          <Button coloured>CodePen</Button>
          <Button coloured>LiveDemo</Button>
        </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
      </Card> 
      </div>


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