import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";

// utc时间格式化
dayjs.extend(utc);
// 时长格式化
dayjs.extend(duration);
// 时区格式化
dayjs.extend(timezone);

export { dayjs as customDayjs };
