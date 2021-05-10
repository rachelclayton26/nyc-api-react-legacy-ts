import { stringify } from 'querystring';
import React, { Component } from 'react';
import { resourceLimits } from 'worker_threads';
// import Article from './Articles'

export type NYTFetch = {
   searchTerm: string;
   startDate: string;
   endDate: string;
   pageNumber: number;
   results: [];
   beenClicked: boolean;
   headline: string;
   title: string;
   main: string;

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
            beenClicked: false,
            headline: "",
            title: "",
            main: ""
        }
    }

    componentDidMount() {
        const key: string= "Ae1pEIRDLoqIhDjWLdLlJgQafGcBsH3a";
        let pageNumber: string= "";
        let searchTerm: string="";
            
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}&page=${pageNumber}&q=${this.state.searchTerm}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.setState({  
                  
                  // article: ,
                  // heading: data,
                  // link: data,
                  // img: data,
                  // para: data,
                  // clearfix: data,
                  // beenClicked: true,
                })
            console.log(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}&page=${pageNumber}&q=${this.state.searchTerm}`)
            // return (
            //       <ul>
            //         {data.map((data: object) => {
            //           return (
            //             <div className="card" id={this.state.id}>
            //               <div className="content">
            //               <div className="header"><a href={data.web_url}>{data.headline.main}</a></div>
            //               <div className="description">{data.snippet}</div>
            //               <br />
            //               </div>
            //            </div>
            //           );
            //         })}
            //       </ul>
            //     );

            })
            .catch(console.log)
        };

        handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value)
          this.setState({
            searchTerm: e.target.value
          })
        }

        handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value)
          this.setState({
            startDate: e.target.value
          })
        }

        handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value)
          this.setState({
            endDate: e.target.value
          })
        };

render(){
    return(
      <div>
        <h1>NY Times video search</h1>
      <div className="wrapper">
        <div className="controls">
          <form>
            <p>
              <label className="search">Enter a SINGLE search term (required): </label>
              <input type="text" id="search" className="search" onChange={this.handleChange}  required/>
            </p>
            <p>
              <label className="start-date">Enter a start date (format YYYYMMDD): </label>
              <input type="date" id="start-date" className="start-date" pattern="[0-9]{8}" onChange={this.handleChange2} />
            </p>
            <p>
              <label className="end-date">Enter an end date (format YYYYMMDD): </label>
              <input type="date" id="end-date" className="end-date" pattern="[0-9]{8}" onChange={this.handleChange3}/>
            </p>
            <p>
              <button className="submit" onClick= {() => this.componentDidMount}>Submit search</button>
            </p>
          </form>
        </div>
        <div>
            <div className={this.state.beenClicked ? "results" : "noResults"} title={this.state.title}>
            <nav>
                <button className="prev">Previous 10</button>
                <button className="next">Next 10</button>
            </nav>
            <section>{this.state.results}</section>
            </div>
        
            <script type="text/javascript" src="nyt.js"></script>
        </div>
        </div>
        </div>
    )
}
}

export default NYTResults;