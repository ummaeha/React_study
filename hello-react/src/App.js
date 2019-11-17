import React, {Component} from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css';


class App extends Component {
  constructor(props) { //초기값 세팅(컴포넌트 초기화)->render()보다 먼저 실행될 코드를 constructor에 작성
    super(props);
    this.state = {
      subject:{title:'WEB', sub:"World Wide Web!"},
      contents:[
        {id:1, title:'HTML', desc:'HTML is Hypertext ...'},
        {id:2, title:'CSS', desc:'CSS is Cascading...'},
        {id:3, title:'JavaScript', desc:'Javascript is  ...'}
      ]
    }
  }
  render() {
    return ( 
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <TOC
        data={this.state.contents}>  
        </TOC>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content>
      </div>
    );
  }
}

export default App;