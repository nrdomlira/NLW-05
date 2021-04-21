export function convertDurationToTimeString(duration: number){
    const Hour = Math.floor(duration / 3600);
    const Minutes = Math.floor((duration % 3600) / 60);
    const Seconds = duration % 60

    const TimeString = [Hour, Minutes, Seconds].map(unit=>
        String(unit).padStart(2, '0')).join(':')
        
    return TimeString;
}