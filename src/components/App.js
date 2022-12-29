import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
    let relatives=["r1","r2","r3","r4"];
        let relativeList=relatives.map((relative))=><h2>{relative}</h2>);
        return(
            <div id="main">
               {/* Do not remove the main div */}
                <ol key="relativeList">
                    <li key="relativeListItem1">{key=relativeListItem1[0]}</li>
                     <li key="relativeListItem2">{key=relativeListItem1[1]}</li>
                     <li key="relativeListItem3">{key=relativeListItem1[2]}</li>
                     <li key="relativeListItem4">{key=relativeListItem1[3]}</li>
                </ol>
            </div>
        );
    }
}


export default App;
