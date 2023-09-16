import { useState } from "react";
import "./App.css";
import Calculate from "./Components/Calculate/Calculate";
import Cards from "./components/Cards/Cards";
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [list, setList] = useState([])
  const [credit, setCredit] = useState(0)
  const [remaining, setRemaining] = useState(20)
  const [totalMoney, setTotalMoney] = useState(0)

  const handleSelect = select => {

    const isExist = list.find(item=>item.id==select.id)
    let credit = select.credit;
    let money = select.price;

    if(isExist){
      toast('Sorry! you cant take same course again')
    }
    else{
      list.forEach(item=>{
        credit = credit + item.credit;
        money = money + item.price;
      })

      const totalRemaining = 20 - credit;
      if(credit>=20){
        toast('Credit Limit: Warning! You cant take more than 20 credits')
      }

      else{
        setRemaining(totalRemaining)
        setList([...list, select])
        setCredit(credit)
        setTotalMoney(money)
      }
      
    }
  }
  // console.log(list)
  return (
    <>
      <div className="bg-[#F3F3F3]">
      <h1 className="text-center text-3xl font-bold mb-7 pt-7">
        Course Registration
      </h1>
      <div className="lg:flex w-11/12 mx-auto pb-20">
        <Cards handleSelect={handleSelect}></Cards>
        <Calculate list={list} credit={credit} remaining={remaining} totalMoney={totalMoney}></Calculate>
      </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
