import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Impact() {
  const { ref: messagesRef, inView: messagesInView } = useInView({ triggerOnce: true });
  const { ref: usersRef, inView: usersInView } = useInView({ triggerOnce: true });

  return (
    <div className="py-10 bg-dasalight space-y-2">
      <h1 className="text-xl text-center font-mulish font-bold">
        Our impact in numbers
      </h1>

      <div className="flex items-center gap-10 justify-center">
        <div className="flex flex-col" ref={messagesRef}>
          <p className="text-center font-Montserrat font-bold text-xl text-[#33312e]">
            {messagesInView ? <CountUp start={0} end={100} duration={3} /> : 0}M
          </p>
          <p className="font-mulish">Messages sent</p>
        </div>

        <div className="flex flex-col" ref={usersRef}>
          <p className="text-center font-Montserrat font-bold text-xl text-[#33312e]">
            {usersInView ? <CountUp start={0} end={100} duration={3} /> : 0}+
          </p>
          <p className="font-mulish">Active users</p>
        </div>
      </div>
    </div>
  );
}

export default Impact;
