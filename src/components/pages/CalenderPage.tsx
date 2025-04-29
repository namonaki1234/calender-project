import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  getMonth,
  startOfMonth,
} from 'date-fns';
import { useEffect, useState } from 'react';
import { CalenderHeader } from '../organisms/CalenderHeader';
import { CalenderBody } from '../organisms/CalenderBody';

export const CalenderPage = () => {
  const today = new Date();
  const [dateList, setDateList] = useState<Date[][]>([]);



  useEffect(() => {
    const monthOfSundayList = eachWeekOfInterval({
      start: startOfMonth(today),
      end: endOfMonth(today),
    });
    const newDateList = monthOfSundayList.map((date) => {
      return eachDayOfInterval({
        start: date,
        end: endOfWeek(date),
      });
    });
    setDateList(newDateList);
  }, []);

  // const loginUser = useRecoilValue(loginUserState); // 値のみ使用

  return (
    // <div>
    //     <p>{loginUser.id}</p>
    //     <p>{loginUser.name}</p>
    // </div>
    <>
      <h1 className="font-bold text-3xl mb-5">{`${getMonth(today) + 1}月`}</h1>
      <table className="w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed">
      <CalenderHeader/>
        <CalenderBody dateList={dateList} currentDate={today}/> 
      </table>
    </>
  );
};
