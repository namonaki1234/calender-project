import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  getDate,
  getMonth,
  isSameMonth,
  isToday,
  startOfMonth,
} from 'date-fns';
import { DAYS_LIST } from '../../constans/calender';
import { useEffect, useState } from 'react';

export const CalenderPage = () => {
  const today = new Date();
  const [dateList, setDateList] = useState<Date[][]>([]);

  const dateColor = (target: Date, currentDate: Date) => {
    if (isToday(target)) return 'bg-lime-800 text-white rounded-full';
    return isSameMonth(target, currentDate) ? 'text-black' : 'text-gray-300';
  };

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
        <thead>
          <tr className="bg-lime-800 text-white rounded-tl-lg py-10">
            {DAYS_LIST.map((day) => (
              <th key={day} className="text-center py-3 text-xl">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dateList.map((oneweek) => (
            <tr key={`week-${getDate(oneweek[0])}`} className="mx-10">
              {oneweek.map((item) => (
                <td
                  key={`day-${getDate(item)}`}
                  className="bg-white h-[10vh] border-2 border-solid border-lime-800"
                >
                  <span
                    className={`inline-block w-[20px] leading-[20px] text-center mb-15 ${dateColor(
                      item,
                      today
                    )} `}
                  >
                    {getDate(item)}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
