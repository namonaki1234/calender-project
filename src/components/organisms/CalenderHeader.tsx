import { DAYS_LIST } from "../../constans/calender";

export const CalenderHeader = () => {
  return    <thead>
            <tr className="bg-lime-800 text-white rounded-tl-lg py-10">
              {DAYS_LIST.map((day) => (
                <th key={day} className="text-center py-3 text-xl">
                  {day}
                </th>
              ))}
            </tr>
          </thead>;
};
