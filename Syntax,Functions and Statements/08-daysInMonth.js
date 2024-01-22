function daysIn (month,year){
return new Date(year,month,0).getDate()
}
daysIn(1, 2012)