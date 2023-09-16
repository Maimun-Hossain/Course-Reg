import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({handleSelect}) => {

    const [cards, setcards] = useState([])

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=> res.json())
        .then(data => setcards(data))
    },[])

    
    // const {id} = card

    return (
        <div className="lg:w-3/4">
            <div className="flex flex-wrap justify-center gap-4">
            {
                cards.map((card, idx) => <Card key={idx} handleSelect={handleSelect} card={card}></Card>)
            }
            </div>
        </div>
    );
};
Cards.propTypes = {
    handleSelect: PropTypes.func.isRequired
}
export default Cards;