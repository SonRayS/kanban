import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { CalendarText } from "./Calendar.style";

export default function Calendar({ selectedDate, setSelectedDate }) {
    let footer = <CalendarText>Пожалуйста, выберите дату.</CalendarText>;
    if (selectedDate) {
        footer = <CalendarText>Вы выбрали {format(selectedDate, "PP", { locale: ru })}.</CalendarText>;
    }
    return (
        <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            footer={footer}
            locale={ru}
        />
    );
}
