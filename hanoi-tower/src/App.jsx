import {Block} from './components/Block'
import {levelArray} from './components/script';
import {Button} from './components/button'
import {useState} from 'react';
import {Header} from './components/header'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'

function App() {
  const [pairs, setPairs] = useState({a:NaN , b:NaN});
  const [count, setcount] = useState(0);
  const [message, setMessage] = useState('');
  const [level, setLevel] = useState(1);  
  const [blocks, setBlocks] = useState(() =>{
    const intitialBlock = {
      1 : levelArray(1),
      2 : [],
      3 : []
    };
    return intitialBlock;
  })

  const handleBlockClick = (id) => {
    setPairs({a: pairs.b, b:id});
  };

  const handleTransfer = () =>{
    if(pairs.a === pairs.b){
      setMessage('Blocks Selected are same !');
    }
    else if(isNaN(pairs.a) || isNaN(pairs.b)){
      setMessage('Select Blocks Properly !');
    }
    else if(blocks[pairs.a].length === 0){
      setMessage(`Block ${pairs.a} is Empty !`);
    }
    else{
      let ele = blocks[pairs.a].pop();
      // console.log(ele);
      blocks[pairs.b].push(ele);
      setcount(count + 1);
      setBlocks({ ...blocks });
      setMessage('');
    }
  }

  const handleReset = () => {
    setPairs({a:NaN , b:NaN});
    setcount(0);
    setBlocks({1 : levelArray(level), 2: [], 3: []});
  }

  return (
    <>

      <Header />
      <div className="h-12 w-ful bg-green-500 z-10 px-5 flex items-center justify-around ">
        <p className='bg-green-800 text-white px-4 py-1 rounded-lg'> Number of Attempts : {count} </p>
        <div>
        <select className='bg-black text-white px-3 py-1 rounded-lg' id='level-select' onChange={(e) => {setLevel(e.target.value); setBlocks({ ...blocks , 1: levelArray(e.target.value)})}}>
          {
            [1, 2, 3, 4, 5].map((value, index) => (
              <option key={index} value={value}>Level {value}</option>
            ))
          }
        </select>
        </div>
      </div>
      
      <div className='w-auto bg-red-400 m-5 text-center font-bold'>{message}</div>

      <div className='flex z-0 justify-center'>
        {
          Object.entries(blocks).map(([blockId, values], index) =>(
            <Block key={index} id={blockId} Values={values} onClick={() => handleBlockClick(blockId)}/>
          ))
        }
      </div>

      <div className="h-12 w-ful bg-green-500 z-10 px-14 flex items-center gap-14 justify-center  ">
        <Button title={`Transfer   ${pairs.a} to ${pairs.b}`} txtCol='white' bgCol='black' onClick={() => setPairs({a:NaN , b:NaN})}/>
        <Button title='Transfer' txtCol='white' bgCol={`${((pairs.a === pairs.b) || isNaN(pairs.a) || isNaN(pairs.b) || (blocks[pairs.a].length === 0)) ? 'red' : 'blue'}-500`} onClick={handleTransfer}/>
        <Button title='Reset' txtCol='black' bgCol='yellow-300' onClick={handleReset}/>
      </div>
    </>
  )
}

export default App