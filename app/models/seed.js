const mongoose = require('mongoose')
const Car = require('./car')
const db = require('../../config/db')

const carBid = [
    {
        make: 'Honda',
		model: 'Accord',
        year: 2015,
        type: 'Sedan',
		description: 'Gets you from A to B hopefully...',
        startingbid: 500,
		buyout: 18000,
        stock: 1,
        image: 'https://i.imgur.com/NiqmhyF.png'
    }

]

    //connect to database
mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        //delete cars
        Car.deleteMany({ owner: null })
            .then(deletedCars => {
                console.log('deletedCars', deletedCars)
                Car.create(carBid)
                    .then(newCars => {
                        console.log('the new cars', newCars)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })