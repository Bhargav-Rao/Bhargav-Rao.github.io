library(maptools)
library(plot3D)
ShapeFile <- readShapeSpatial('Test.shp')
Polygons <- slot(ShapeFile,"polygons")
temp <- do.call(rbind, lapply(Polygons, function(x) slot(slot(x, "Polygons")[[1]], "coords")))
polygon3D(temp[, 1], temp[, 2], rep(0, nrow(temp)), col="transparent")
for (i in seq_along(Polygons)) {
  temp <- slot(slot(Polygons[[i]], "Polygons")[[1]], "coords")
  polygon3D(temp[, 1], temp[, 2], rep(0, nrow(temp)), add = TRUE)
}