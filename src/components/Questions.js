import React, { Component } from "react";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionText: "",
      wrongAnswers: [],
      rightAnswer: "",
    };
  }

  OnClickButton = () => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results[0].question);
        this.setState({ questionText: data.results[0].question });
      });
  };

  render() {
  const isLoggedIn = this.props.isLogin  
   
  return (
    <div>
      {isLoggedIn
        ? <div onClick ={this.OnClickButton}>you login play the game</div>
        : <div>fk u stop hacking </div>
      }
    </div>
  ); 
  
  }
}
export default Questions;
