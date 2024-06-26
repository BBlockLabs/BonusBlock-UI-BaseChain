import CirclesImg from '../assets/images/card_header.png';
import EmptyCube from '../assets/svg/emptyCube.svg';

const QuestCard = () => {
  return (
    <div className='card-shadow w-[361px] flex flex-col px-4 pt-6 pb-5 rounded-xl'>
        <img src={CirclesImg} alt="circles" />
        <div className="flex items-center gap-4 mt-4">
            <div className="bg-blue p-1">
                <EmptyCube className="w-12 h-auto" />
            </div>
            <p className="text-white text-2xl">Quest Title</p>
        </div>
        <p className="mt-6 text-white text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia augue eget nisl euismod, quis pulvinar massa. euismod, quis pulvinar massa. euismod, quis pulvinar massa.
        </p>
        <div className="flex items-center justify-between mt-6">
            <div className="flex flex-col">
                <p className="text-white text-lg">Community XP</p>
                <p className="text-white text-lg">5,600 XP</p>
            </div>
            <button
                className="px-4 py-[5px] border border-white text-white text-lg font-medium rounded-[3px]"
            >
                Visit
            </button>
        </div>
    </div>
  )
};

export default QuestCard;
