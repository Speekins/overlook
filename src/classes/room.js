class Room {
  constructor(roomData) {
    this.number = roomData.number
    this.type = roomData.roomType
    this.hasBidet = roomData.bidet
    this.costPerNight = roomData.costPerNight
    this.bedSize = roomData.bedSize
    this.numBeds = roomData.numBeds
  }
}

module.exports = Room