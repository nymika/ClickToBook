const express=require('express')
const mongoose=require('mongoose')

const ShowTime=require('../models/showTime')
const Ticket=require('../models/ticket')

const router=new express.Router()
const auth=require('../middlewares/auth')

router.get('/ticketbooking/:showtimeid',async (req,res)=>{
    const _showTime=req.params.showtimeid
    try{
        const showTime=await ShowTime.findById({_id:_showTime})
        if(!showTime)
        {
            return res.status(404).send()
        }
        return res.send(showTime.seatInfo)
    }catch(e){
        return req.status(501).send("error")
    }

})
//If one fails other also gets fail
router.post('/ticket',auth,async(req,res)=>{
    const customer=req.user._id
    const _showTime=req.body._showTime
    const seatsInfo=req.body.seatsInfo
    const price=req.body.price

    const showTime=await ShowTime.findById(_showTime)
    // console.log(seatsInfo)
    let seatInfo=new Map()
    //const seatnoArray=[]
    for(let key of Object.keys(seatsInfo))
    {
        //console.log(showTime.seatInfo.get(key))
        let availability=[...showTime.seatInfo.get(key).availability]
        let price=showTime.seatInfo.get(key).price
        for(let j=0;j<seatsInfo[key].length;j++)
        {
            if(availability[seatsInfo[key][j]]==false)
            {
                return res.send("You can't book ticket")
            }
            availability[seatsInfo[key][j-1]]=false
        }
        seatInfo.set(key,{availability,price})
    }
    showTime.seatInfo=seatInfo
    const seats=[]
    for(let key of Object.keys(seatsInfo))
    {
       //console.log(seatsInfo[key].length)
       if(seatsInfo[key].length)
        {
            let seatType=key
            let seatno=[...seatsInfo[key]]
            seats.push({
                seatType,
                seatno
            })
        }
    }
    //console.log(seats)
    const ticket=await new Ticket
                ({
                    customer,_showTime,seats,price
                 })
   //if ticket.save()fails=>showTime.save() executed (problem)
   //one solution:before saving into actual database save it into some temporary db
   
    await ticket.save()
    showTime.save()
    return res.status(200).send(showTime)
})

module.exports=router