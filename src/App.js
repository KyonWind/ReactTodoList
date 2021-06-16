import './css/Styles.css';
import Itemlist from './components/ItemList.js';

function App() {

  var itemlist = [];
  var mockupdata = [{
    "text":'cosa para hacer 1',
    "complete":false
    },
    {
      "text":'cosa para hacer 2',
      "complete":false
      },
      {
        "text":'cosa para hacer 3',
        "complete":false
        },
        {
          "text":'cosa para hacer 4',
          "complete":false
          }];

          

          mockupdata.forEach(element => {
            
            itemlist.push(<Itemlist
              text={element.text}
              complete={element.complete}
              />)
          });

  return (
    <div className="App">
      <header className="App-header">
        <ul>
        {itemlist}
        </ul>
      </header>
    </div>
  );
}

export default App;
