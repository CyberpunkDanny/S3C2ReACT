import React, {Component} from 'react';
import {Media} from 'reactstrap';

class Menu extends Component{
	/*constructor for this components; brings in some data to construct component*/
	constructor(props){
		super(props);
		
		/*state stores properties related to this component that we can make us of*/
		this.state = {
			/*dishes is a property defined as a JS object containing array of dishes*/
			dishes: [ 
				{
                  id: 0,
                  name:'Uthappizza',
                  image: 'assets/images/uthappizza.png',
                  category: 'mains',
                  label:'Hot',
                  price:'4.99',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                 },
               {
                  id: 1,
                  name:'Zucchipakoda',
                  image: 'assets/images/zucchipakoda.png',
                  category: 'appetizer',
                  label:'',
                  price:'1.99',
                  description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'  
	   		  },
               {
                  id: 2,
                  name:'Vadonut',
                  image: 'assets/images/vadonut.png',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:'A quintessential ConFusion experience, is it a vada or is it a donut?'    
				  },
               {
                  id: 3,
                  name:'ElaiCheese Cake',
                  image: 'assets/images/elaicheesecake.png',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'   
				  }
			],
		};
	}

	//a class component should implement render() method which will return the corresponding view for this component
	render(){
		//When we define a property like this.state, we can refer to its data within our code as 'this.state.dishes'
		const menu = this.state.dishes.map((dish)=>{
			return(
				<div key={dish.id} className="col-12 mt-5">
					{/*view for each of the items*/}
					<Media tag="li">
						<Media left middle>
							<Media object src={dish.image} alt={dish.name} />
						</Media>
						<Media body className="ml-5"> 
							<Media heading>{dish.name}</Media>
							<p>{dish.description}</p>
						</Media>
					</Media>
				</div>
			);
		}); //map operator is to iterate over array items
		//Arrow function is used to define what is going to be returned by this map operator; here a layout for a dish is returned
		//Whenever a list of items is constructed in React, a key attribute is to be compulsory defined so as it to be recognized uniquely by React while rendering
		
		return (
			<div className=""container>
				<div className="row">
					<Media list> {/*List of items*/}
						{menu} {/*A JS Variable*/}
					</Media>
				</div>
			</div>
		);
	}
}

//Always export your component
export default Menu;