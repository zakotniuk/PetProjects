import React from "react";

class Form extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.weatherMethod}>
                    <input type="text" name="city" placeholder="Город.."/>
                    <button>Узнать погоду</button>
                </form>
            </div>

        );
    }

}

export default Form;