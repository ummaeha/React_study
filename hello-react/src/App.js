import React, {Component} from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css';
import { conditionalExpression } from '@babel/types';


class App extends Component {
  constructor(props) { //초기값 세팅(컴포넌트 초기화)->render()보다 먼저 실행될 코드를 constructor에 작성
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:"World Wide Web!"},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is Hypertext ...'},
        {id:2, title:'CSS', desc:'CSS is Cascading...'},
        {id:3, title:'JavaScript', desc:'Javascript is  ...'}
      ]
    }
  }
  //props나 state가 바뀌면 그에 맞는 render()가 호출되도록 설정되어있음 -> 즉, 바뀌면 화면이 다시 그려짐
  //어떤 html을
  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render',this);
    return ( 
      <div className="App">
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject> */}
        <header> 
          <h1><a href="/" onClick={function(e) {
            console.log(e);
            e.preventDefault();
            //this.state.mode = 'welcome'
            this.setState({
              mode:'welcome'
            });
          }.bind(this)} >{this.state.subject.title}</a></h1> 
          {this.state.subject.sub}
        </header>
        <TOC
        data={this.state.contents}>  
        </TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;