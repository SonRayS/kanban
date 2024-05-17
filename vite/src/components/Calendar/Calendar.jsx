import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { CalendarText, CalendarDivBlock } from "./Calendar.style";
import useTheme from "../Hooks/useTheme";

export default function Calendar({ selectedDate, setSelectedDate }) {
    const { theme, toggleTheme } = useTheme();

    let footer = <CalendarText>Пожалуйста, выберите дату.</CalendarText>;
    if (selectedDate) {
        footer = <CalendarText $Theme={theme}>Вы выбрали {format(selectedDate, "PP", { locale: ru })}.</CalendarText>;
    }

    return (
        <CalendarDivBlock $Theme={theme}>
            <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                footer={footer}
                locale={ru}
            />
        </CalendarDivBlock>
    );
}
