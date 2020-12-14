import java.text.DateFormatSymbols;
import java.util.*;

public class CalendarTest {

    public static void main(String[] args) {
        GregorianCalendar d = new GregorianCalendar();

        // 今天是几号
        int today = d.get(Calendar.DAY_OF_MONTH);
        System.out.println("today of month is " + today);

        // 月份要 + 1 ,因为是从0 开始计数
        int month = d.get(Calendar.MONDAY);
        System.out.println("现在是" + (month + 1) + "月");

        // 把日期设置成1号
        d.set(Calendar.DAY_OF_MONTH, 1);

        int nowtoday = d.get(Calendar.DAY_OF_MONTH);
        System.out.println("今天是" + nowtoday);


        int weekday=d.get(Calendar.DAY_OF_WEEK);
        System.out.println("周末是" + weekday);



    }

}
