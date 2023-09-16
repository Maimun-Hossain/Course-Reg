import PropTypes from 'prop-types';

const Card = ( {card, handleSelect} ) => {
    const {title, cover, paragraph, price, credit} = card
  return (
    <div className="">
      <div className="card w-80 h-[435px] bg-white">
        <figure className=" pt-8 pb-5">
          <img
            src={cover}
            alt="Shoes"
            className="rounded-b-lg"
          />
        </figure>
        <div className="card-body items-center text-center p-4">
          <h2 className="card-title text-lg font-bold">{title}</h2>
          <p>{paragraph}</p>
          <div className="flex gap-4 my-2">
            <div><i className="fa-solid fa-dollar-sign"></i></div>
            <div>Price: {price}</div>
            <div><i className="fa-solid fa-book-open"></i></div>
            <div>Credit: {credit}</div>
          </div>
          <div className="card-actions">
            <button onClick={()=>handleSelect(card)} className="btn btn-primary w-72 h-10 rounded-lg border-none bg-[#2F80ED]">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
    handleSelect: PropTypes.func.isRequired,
    card: PropTypes.func.isRequired
}
export default Card;
