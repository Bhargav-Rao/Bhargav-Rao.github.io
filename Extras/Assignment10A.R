library("nycflights13")
library("dplyr")
avrg <- mutate(select(flights, distance, air_time), average_speed = distance / air_time * 60)
sorted_avrg <- na.omit(avrg[order(avrg$average_speed, decreasing = TRUE),])
