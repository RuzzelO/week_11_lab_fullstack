import axios from 'axios'
import React, { Component } from 'react'
import PersonDetail from './PersonDetail'


export default class PersonList extends Component {

    constructor(props) {
        super(props)
    
       //Define state default values
    this.state = {
        persons: []
    }
}

    componentDidMount = () =>{
        this.getPersonList()
    }
     //Component Lifecycle Callback
    getPersonList = () => {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res);
            const persons = res.data.results;
            this.setState({ persons });
        })
        .catch((e) => 
  {
    console.error(e);
  });
  //this.setState({});
}
    


    render() {
        return (
            <div>
                <button onClick={this.getPersonList}>Get Persons</button>
                {
                    this.state.persons.map(person => (
                        <PersonDetail key ={person.id} person={person}/>
                    ))
                }
            </div>
        )
    }
}
