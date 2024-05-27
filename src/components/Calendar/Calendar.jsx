import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { CalendarText, CalendarDivBlock } from "./Calendar.style";
import useTheme from "../Hooks/useTheme";

export default function Calendar({ disabled, date, selectedDate, setSelectedDate }) {
    const { theme } = useTheme();

    let footer = (
        <CalendarText>
            {!date && <a>Выберите дату начала</a>}{" "}
            {date && <a>Срок выподнения: {format(date, "dd.MM.yy", { locale: ru })}.</a>}
        </CalendarText>
    );
    if (selectedDate) {
        footer = <CalendarText>Вы выбрали: {format(selectedDate, "dd.MM.yy", { locale: ru })}.</CalendarText>;
    }

    return (
        <CalendarDivBlock
            $Theme={theme}
            $Disabled={disabled}
        >
            <DayPicker
                mode="single"
                selected={selectedDate || date}
                onSelect={disabled ? () => true : setSelectedDate}
                footer={footer}
                locale={ru}
                showOutsideDays="true"
                minDate={format}
                disableNavWhenOutRange="true"
            />
        </CalendarDivBlock>
    );
}
