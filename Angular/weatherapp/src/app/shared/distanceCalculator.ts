export class DistanceCalculator{

     RADII:any = {
        km:    6371,
        mile:  3960,
        meter: 6371000,
        nmi:   3440
      }

   constructor(){}     

   toRad(num) {
    return num * Math.PI / 180
  }


  // convert coordinates to standard format based on the passed format option
  convertCoordinates(format, coordinates) {
    switch (format) {
    case '[lat,lon]':
      return { latitude: coordinates[0], longitude: coordinates[1] }
    case '[lon,lat]':
      return { latitude: coordinates[1], longitude: coordinates[0] }
    case '{lon,lat}':
      return { latitude: coordinates.lat, longitude: coordinates.lon }
    case 'geojson':
      return { latitude: coordinates.geometry.coordinates[1], longitude: coordinates.geometry.coordinates[0] }
    default:
      return coordinates
    }
  }


  haversine (startCoordinates, endCoordinates, options) {
    options   = options || {}

    let R = options.unit in this.RADII
      ? this.RADII[options.unit]
      : this.RADII.km

    let start = this.convertCoordinates(options.format, startCoordinates)
    let end = this.convertCoordinates(options.format, endCoordinates)

    let dLat = this.toRad(end.latitude - start.latitude)
    let dLon = this.toRad(end.longitude - start.longitude)
    let lat1 = this.toRad(start.latitude)
    let lat2 = this.toRad(end.latitude)

    let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

    if (options.threshold) {
      return options.threshold > (R * c)
    }

    return R * c
  }

    
      
}