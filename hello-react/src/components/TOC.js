import React, {Component} from 'react';
class TOC extends Component { //table of contents
    render() {
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while (i < data.length) {
      lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);
        i++;
      }
      return (
        <nav>
        <ul>
          {lists}
        </ul>
      </nav>
      );
    }
  }
  //이 코드로 인해 TOC코드를 가져다 쓸 수 있는 것
  export default TOC;