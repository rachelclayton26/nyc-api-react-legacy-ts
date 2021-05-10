import { stringify } from 'querystring';
import React, { Component } from 'react';

export type NYTFetch = {
   searchTerm: string;
   startDate: string;
   endDate: string;
   pageNumber: number;
   results: [];
   button: boolean;
   headline: string
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
            button: true,
            headline: ""
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
                this.results()
            })
            .catch(console.log)
        };

        results(){
        return (
        <div>
            <div className="results">
            <nav>
                <button className="prev">Previous 10</button>
                <button className="next">Next 10</button>
            </nav>
            <section>{this.state.results}</section>
        </div>
        
        <script type="text/javascript" src="nyt.js"></script>
        </div>
        )
        }
    
render(){
    return(
        <div>
        <h1>NY Times video search</h1>
      <div className="wrapper">
        <div className="controls">
          <form>
            <p>
              <label className="search">Enter a SINGLE search term (required): </label>
              <input type="text" id="search" className="search" required/>
            </p>
            <p>
              <label className="start-date">Enter a start date (format YYYYMMDD): </label>
              <input type="date" id="start-date" className="start-date" pattern="[0-9]{8}"/>
            </p>
            <p>
              <label className="end-date">Enter an end date (format YYYYMMDD): </label>
              <input type="date" id="end-date" className="end-date" pattern="[0-9]{8}"/>
            </p>
            <p>
              <button className="submit" onClick= {() => this.componentDidMount}>Submit search</button>
            </p>
          </form>
        </div>
        </div>
        </div>
    )
}
}

export default NYTResults;
