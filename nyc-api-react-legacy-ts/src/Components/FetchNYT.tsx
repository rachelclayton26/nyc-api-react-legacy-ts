import { stringify } from 'querystring';
import React, { Component } from 'react';

export type NYTFetch = {
   searchTerm: string;
   startDate: string;
   endDate: string;
   pageNumber: number;
   results: [];
   button: boolean;
}

class NYTResults extends React.Component<{}, NYTFetch> {
    constructor(props: any ) {
        super(props)
        this.state= {
            searchTerm: "",
            startDate: "",
            endDate: "",
            pageNumber: 0,
            results: [],
            button: true
        }
    }

    componentDidMount() {
        const key: string= "Ae1pEIRDLoqIhDjWLdLlJgQafGcBsH3a";
        let pageNumber: string= "";
        let searchTerm: string="";
            
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}&page=${pageNumber}&q=${this.state.searchTerm}`)
            .then(res => res.json())
            .then((data: {current: {temp: number}}) => {
                console.log(data)
                this.setState({
                    
                })
            })
            .catch(console.log)
        };
    
    

render(){
    return(
        <div>
            
        </div>
    )
}
}

export default NYTResults;
