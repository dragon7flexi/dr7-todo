export function concatenateTime(hour: string, minute: string ): string {
    if (hour.length == 1) {
        hour = `0${hour}`
    }

    if (minute.length == 1) {
        minute = `0${minute}`
    }


    const time = `${hour}:${minute}:00`
    return time;
}
