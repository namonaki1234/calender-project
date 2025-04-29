import { getDate} from "date-fns";
import { dateColor } from "../../libs/date";

type PropsType = {
    currentDate: Date;
    dateList: Date[][];
}

export const CalenderBody = ({ currentDate,dateList }:PropsType) => {


  return <tbody>
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
            currentDate,
            )} `}
          >
            {getDate(item)}
          </span>
        </td>
      ))}
    </tr>
  ))}
</tbody>;
};
