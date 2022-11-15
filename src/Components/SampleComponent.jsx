import React from 'react';
/*import ReactDataGrid from "./ReactDataGrid";*/

class SampleComponent extends React.Component{

    render(){
        console.log(this.props);
        return (
            <div>
                <h3>Component {this.props.componentName}</h3>
            </div>
        );
    }

}

export default SampleComponent;
