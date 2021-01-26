
import './App.css';



function App() {
  
    const like = [
      {
		sothich: 'Bong da',
		content: 'Choi rat gioi',
		cate: 'Tien dao',
      },
      {
        sothich: 'Am nhac',
		content: 'Choi rat gioi',
		cate: 'Guitar',
      },
	];
	const myName = 'Nguyen Phuc Hung';
    const element = like.map((like,index) => {
      return(
        <div class="content">
            <div class="content1">
              <h4>{ like.sothich }</h4>
			  <p>{ like.cate }</p>
			  <p>{ like.content }</p>
            </div>
          </div>
      );    
    });
  return (
    <div class="main">
		<div class="left">
			<div class="image">
				<img src="" alt="" width="100%" height="243px"/>
			</div>
			<div class="text">
				<h1><strong>Hello</strong></h1>
				<h2>My Name is { myName }</h2>
			</div>
		</div>
		<div class="right">
			<div class="title">
				<h1>Introducing Yourself Self</h1>
				<h1>Introducing with Text Boxes</h1>
			</div>
			<div class="all-content">
       			 {element}
			</div>
		</div>
	</div>     
  );
}

export default App;
