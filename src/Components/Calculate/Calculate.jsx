import PropTypes from 'prop-types';

const Calculate = ({list, credit, remaining, totalMoney}) => {
  return (
    <div className="lg:w-1/4 mt-3 lg:mt-0">
      <div>
        <div className="card bg-white py-2 px-6">
          <h1 className="text-lg font-bold text-[#2F80ED] border-b-2 py-4">Credit Hour Remaining {remaining} hr</h1>
          <h1 className="text-lg font-bold py-4">Course Name</h1>
          
            <ul>
            {
                list.map((list, idx)=>(
                    <li key={idx}>{`${idx + 1}. ${list.title}`}</li>
                ))
            }
            </ul>
          
          <h1 className="py-4 text-lg font-medium border-b-2">Total Credit Hour : {credit}</h1>
          <h1 className="py-4 text-lg font-semibold">Total Price : {totalMoney} USD</h1>
        </div>
      </div>
    </div>
  );
};
Calculate.propTypes = {
    list: PropTypes.object.isRequired,
    credit: PropTypes.object.isRequired,
    remaining: PropTypes.number.isRequired,
    totalMoney: PropTypes.number.isRequired
}
export default Calculate;
